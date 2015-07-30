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
    registeredResourceNamespaces: [],
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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"111a0b04-6166-44c3-870b-84e2f6c0a1d2"',
  'x-ms-request-id': '879e2df2-d3ee-4365-9179-d941aeb193be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-correlation-request-id': '141fe744-3de3-423e-8d76-b909853a4949',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120122Z:141fe744-3de3-423e-8d76-b909853a4949',
  date: 'Tue, 28 Apr 2015 12:01:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplattestlbLbI\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI\",\r\n  \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"xplattestFrontendIpName\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/publicIPAddresses/xplatTestIpLbI\"\r\n          },\r\n          \"inboundNatRules\": [\r\n            {\r\n              \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\"\r\n            }\r\n          ]\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [\r\n      {\r\n        \"name\": \"xplattestInbound\",\r\n        \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/inboundNatRules/xplattestInbound\",\r\n        \"etag\": \"W/\\\"111a0b04-6166-44c3-870b-84e2f6c0a1d2\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"frontendIPConfiguration\": {\r\n            \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateLbI/providers/Microsoft.Network/loadBalancers/xplattestlbLbI/frontendIPConfigurations/xplattestFrontendIpName\"\r\n          },\r\n          \"protocol\": \"Tcp\",\r\n          \"frontendPort\": 3380,\r\n          \"backendPort\": 3380,\r\n          \"enableFloatingIP\": true,\r\n          \"idleTimeoutInMinutes\": 4\r\n        }\r\n      }\r\n    ]\r\n  },\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2199',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"111a0b04-6166-44c3-870b-84e2f6c0a1d2"',
  'x-ms-request-id': '879e2df2-d3ee-4365-9179-d941aeb193be',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-correlation-request-id': '141fe744-3de3-423e-8d76-b909853a4949',
  'x-ms-routing-request-id': 'EASTASIA:20150428T120122Z:141fe744-3de3-423e-8d76-b909853a4949',
  date: 'Tue, 28 Apr 2015 12:01:21 GMT',
  connection: 'close' });
 return result; }]];