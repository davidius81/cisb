// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
    name: 'Azure SDK sandbox',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=testmongo101;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://testmongo101.file.core.windows.net:443')
  .put('/storageclitest3?restype=share')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 23 Mar 2015 23:02:53 GMT',
  etag: '"0x8D233D4A0E8A974"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b012b33c-001a-0017-160e-3d184f000000',
  'x-ms-version': '2014-02-14',
  date: 'Mon, 23 Mar 2015 23:02:53 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://testmongo101.file.core.windows.net:443')
  .head('/storageclitest3?restype=share')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 23 Mar 2015 23:02:53 GMT',
  etag: '"0x8D233D4A0E8A974"',
  server: 'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f1a38e80-001a-0082-6ee1-c22a55000000',
  'x-ms-version': '2014-02-14',
  'x-ms-share-quota': '5120',
  date: 'Mon, 23 Mar 2015 23:02:54 GMT' });
 return result; }]];