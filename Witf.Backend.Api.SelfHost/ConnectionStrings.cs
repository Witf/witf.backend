﻿using System.Configuration;
using Witf.Backend.Infrastructure.Database;

namespace Witf.Backend.Api.SelfHost
{
    public class ConnectionStrings : IConnectionStrings
    {
        public string DataBase => ConfigurationManager.ConnectionStrings["database"].ConnectionString;
    }
}