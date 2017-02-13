param([switch]$drop, [switch]$integrationTest, $connectionstring)

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

if (-not $connectionstring) {
    $connectionstring = "server=(local);database=$dbName;Trusted_Connection=true";
}

if ($drop) {
    & '..\..\packages\roundhouse.0.8.6\bin\rh.exe' "-c=$connectionstring" '--drop' '--ni'
}

& '..\..\packages\roundhouse.0.8.6\bin\rh.exe' "-c=$connectionstring" '-env=LOCAL' '/vf=..\..\Witf.Backend.Api\bin\Debug\Witf.Backend.Api.dll' '--ct=3600' '--ni'

popd