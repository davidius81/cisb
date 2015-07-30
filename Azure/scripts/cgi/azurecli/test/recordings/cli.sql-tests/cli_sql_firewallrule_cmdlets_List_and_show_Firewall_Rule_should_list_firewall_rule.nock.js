// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_SQL_TEST_LOCATION'] = 'West US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7bde50b0f2107e499b07266430359e6b',
  date: 'Fri, 13 Mar 2015 03:48:57 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers', '*')
  .reply(201, "<ServerName FullyQualifiedDomainName=\"s41lcflvh8.database.windows.net\" xmlns=\"http://schemas.microsoft.com/sqlazure/2010/12/\">s41lcflvh8</ServerName>", { 'cache-control': 'no-cache',
  'content-length': '149',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'da4dcf8ba3097d7c83c7aadb46eec413',
  date: 'Fri, 13 Mar 2015 03:49:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ed87ac3c5dd875bcadc6d0bbe68dd3e9',
  date: 'Fri, 13 Mar 2015 03:49:01 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/s41lcflvh8/firewallrules', '*')
  .reply(201, "<ServiceResource xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Name>rule1</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/s41lcflvh8/firewallrules/rule1</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/s41lcflvh8</ParentLink><StartIPAddress>192.168.0.1</StartIPAddress><EndIPAddress>192.168.0.255</EndIPAddress></ServiceResource>", { 'cache-control': 'no-store,no-cache',
  'content-length': '594',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '6e22fc248f9073b1a8af7b81b85d2d68',
  date: 'Fri, 13 Mar 2015 03:49:02 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '56adea0262f873949b32f62f12a76b2f',
  date: 'Fri, 13 Mar 2015 03:49:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/s41lcflvh8/firewallrules')
  .reply(200, "<ServiceResources xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ServiceResource><Name>rule1</Name><Type>Microsoft.SqlAzure.FirewallRule</Type><State>Normal</State><SelfLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/s41lcflvh8/firewallrules/rule1</SelfLink><ParentLink>https://management.core.windows.net/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/s41lcflvh8</ParentLink><StartIPAddress>192.168.0.1</StartIPAddress><EndIPAddress>192.168.0.255</EndIPAddress></ServiceResource></ServiceResources>", { 'cache-control': 'no-store,no-cache',
  'content-length': '631',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '47b676c7ba697fd18b891900ec1c617d',
  date: 'Fri, 13 Mar 2015 03:49:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ed39a382246c745c9036c1af7b2c0ab4',
  date: 'Fri, 13 Mar 2015 03:49:04 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .delete('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services/sqlservers/servers/s41lcflvh8')
  .reply(200, "", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '6f13cee09c1576a988321ebeb61661f7',
  date: 'Fri, 13 Mar 2015 03:49:08 GMT' });
 return result; }]];