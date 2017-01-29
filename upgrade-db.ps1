param([switch]$drop, [switch]$integrationTest)

if ($integrationTest) 
{
	[Xml]$xml = Get-Content Witf.Backend.IntegrationTests\App.config
}
else 
{
	[Xml]$xml = Get-Content Witf.Backend.Api.Selfhost\App.config
}

$m = $xml.configuration.connectionStrings | select-object -first 1 | % { $_.add.connectionString } | sls "Initial Catalog=(?<db>[^;]+)" | select -expand Matches
$dbName = $m.Groups['db'].Value

pushd
set-location Witf.Backend\Database

if ($drop) {
    & '..\..\packages\roundhouse.0.8.6\bin\rh.exe' "-c=server=(local);database=$dbName;Trusted_Connection=true" '--drop' '--ni'
}

& '..\..\packages\roundhouse.0.8.6\bin\rh.exe' "-c=server=(local);database=$dbName;Trusted_Connection=true" '-env=LOCAL' '/vf=..\..\Witf.Backend.Api\bin\Debug\Witf.Backend.Api.dll' '--ct=3600' '--ni'

popd