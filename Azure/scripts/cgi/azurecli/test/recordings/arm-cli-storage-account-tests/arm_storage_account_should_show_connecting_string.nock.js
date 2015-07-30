// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_RESOURCE_GROUP_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/armclistorageGroup7844/providers/Microsoft.Storage/storageAccounts/armclistorageaccount452/listKeys?api-version=2015-05-01-preview')
  .reply(200, "{\"key1\":\"FQ+eJBsVLmsA/WC36FDcpDA3JjmXCCMZ7UD5PkxysDQjpcQtnPfQK3Z5ADXNLTaDRjo3KZE/jvKCJjfvVqBsAg==\",\"key2\":\"nIaeMY3evSxoF0t9JJ0qgCwF2pCeNe2Wlsb2NKv+wA8zP27vqAPUlyf6Is1OzUjv3Giq93DmH6dfpx3phOI9dw==\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '197',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4fbfbe06-0e4e-4e19-a76e-f4de0bb623f2',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '1475d6ff-da6a-4c20-8a70-fee3a8ebf942',
  'x-ms-routing-request-id': 'WESTUS:20150422T204328Z:1475d6ff-da6a-4c20-8a70-fee3a8ebf942',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 22 Apr 2015 20:43:28 GMT' });
 return result; }]];