using System;
using System.Collections.Concurrent;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Remoting.Messaging;

namespace Witf.Backend.Infrastructure.Database
{
    /// <summary>
    /// An ambient async await connection scope
    /// </summary>
    public class DbConnectionScope : IDisposable
    {
        private static readonly ConcurrentDictionary<Guid, DbConnectionScope> ActiveScopes = new ConcurrentDictionary<Guid, DbConnectionScope>();

        private static readonly string KeyInCallContext = "witf.db-connection-scope-" + AppDomain.CurrentDomain.Id.ToString(CultureInfo.InvariantCulture);

        private readonly Guid _id = Guid.NewGuid();
        private DbConnectionScope _parentScope;
        private IDbConnection _dbConnection;

        public DbConnectionScope(IConnectionStrings connectionStrings)
        {
            _parentScope = ObtainCurrentScope();
            _dbConnection = _parentScope == null ? new SqlConnection(connectionStrings.DataBase) : _parentScope._dbConnection;

            ActiveScopes.TryAdd(_id, this);
            CallContext.LogicalSetData(KeyInCallContext, _id);
        }

        public void Dispose()
        {
            if (_parentScope != null)
            {
                CallContext.LogicalSetData(KeyInCallContext, _parentScope._id);
                _parentScope = null;
                _dbConnection = null;
            }
            else
            {
                CallContext.FreeNamedDataSlot(KeyInCallContext);
                _dbConnection.Dispose();
                _dbConnection = null;
            }

            DbConnectionScope instanceOfThis;
            ActiveScopes.TryRemove(_id, out instanceOfThis);
        }

        public IDbConnection Current => _dbConnection;

        private static DbConnectionScope ObtainCurrentScope()
        {
            var scopeId = CallContext.LogicalGetData(KeyInCallContext);

            if (scopeId == null)
                return null;

            DbConnectionScope scope;
            ActiveScopes.TryGetValue((Guid) scopeId, out scope);
            return scope;
        }
    }
}