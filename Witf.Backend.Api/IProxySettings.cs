using Castle.Components.DictionaryAdapter;

namespace Witf.Backend.Api
{
    [KeyPrefix(KeyPrefix = "proxy::")]
    public interface IProxySettings
    {
        string SearchApiUrl { get; }
    }
}