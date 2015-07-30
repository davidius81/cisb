// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '409',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3c79da17-5cef-4db5-8cad-241f0722bf44',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31999',
  'x-ms-correlation-request-id': '7e26cd0a-73b8-427a-a9f1-e478da457f55',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060651Z:7e26cd0a-73b8-427a-a9f1-e478da457f55',
  date: 'Tue, 28 Apr 2015 06:06:50 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"platformUpdateDomainCount\": 5,\r\n    \"platformFaultDomainCount\": 3,\r\n    \"virtualMachines\": []\r\n  },\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGAvailCreate/providers/Microsoft.Compute/availabilitySets/xplatTestaAvail\",\r\n  \"name\": \"xplatTestaAvail\",\r\n  \"type\": \"Microsoft.Compute/availabilitySets\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '409',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3c79da17-5cef-4db5-8cad-241f0722bf44',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31999',
  'x-ms-correlation-request-id': '7e26cd0a-73b8-427a-a9f1-e478da457f55',
  'x-ms-routing-request-id': 'EASTASIA:20150428T060651Z:7e26cd0a-73b8-427a-a9f1-e478da457f55',
  date: 'Tue, 28 Apr 2015 06:06:50 GMT',
  connection: 'close' });
 return result; }]];