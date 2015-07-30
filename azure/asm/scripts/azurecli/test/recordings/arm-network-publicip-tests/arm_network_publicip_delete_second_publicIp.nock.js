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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7593/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew7593\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7593\",\r\n  \"etag\": \"W/\\\"26e876f1-ee5b-4d7f-accf-69804cc5131f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip15906\",\r\n      \"fqdn\": \"dnstestpubip15906.westus.cloudapp.azure.com\",\r\n      \"reverseFqdn\": \"dnstestpubip1159.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '627',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"26e876f1-ee5b-4d7f-accf-69804cc5131f"',
  'x-ms-request-id': '35dc5c7f-c12b-427a-a224-776cc6244bf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31941',
  'x-ms-correlation-request-id': '25bd59b8-cd75-4dd1-bb4a-1a9221696ea3',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090528Z:25bd59b8-cd75-4dd1-bb4a-1a9221696ea3',
  date: 'Mon, 27 Apr 2015 09:05:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7593/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew7593\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7593\",\r\n  \"etag\": \"W/\\\"26e876f1-ee5b-4d7f-accf-69804cc5131f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip15906\",\r\n      \"fqdn\": \"dnstestpubip15906.westus.cloudapp.azure.com\",\r\n      \"reverseFqdn\": \"dnstestpubip1159.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '627',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"26e876f1-ee5b-4d7f-accf-69804cc5131f"',
  'x-ms-request-id': '35dc5c7f-c12b-427a-a224-776cc6244bf9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31941',
  'x-ms-correlation-request-id': '25bd59b8-cd75-4dd1-bb4a-1a9221696ea3',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090528Z:25bd59b8-cd75-4dd1-bb4a-1a9221696ea3',
  date: 'Mon, 27 Apr 2015 09:05:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7593/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/99bebe71-7cc9-4b46-a6fe-56cde9b20f7c?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '99bebe71-7cc9-4b46-a6fe-56cde9b20f7c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/99bebe71-7cc9-4b46-a6fe-56cde9b20f7c?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '3ee96ec3-4fc9-4ace-aa9f-0265f7345475',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090532Z:3ee96ec3-4fc9-4ace-aa9f-0265f7345475',
  date: 'Mon, 27 Apr 2015 09:05:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew7593/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/99bebe71-7cc9-4b46-a6fe-56cde9b20f7c?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '99bebe71-7cc9-4b46-a6fe-56cde9b20f7c',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/99bebe71-7cc9-4b46-a6fe-56cde9b20f7c?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1186',
  'x-ms-correlation-request-id': '3ee96ec3-4fc9-4ace-aa9f-0265f7345475',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090532Z:3ee96ec3-4fc9-4ace-aa9f-0265f7345475',
  date: 'Mon, 27 Apr 2015 09:05:32 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/99bebe71-7cc9-4b46-a6fe-56cde9b20f7c?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e3b5a5fa-acdc-4b0a-bc52-297602486971',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31956',
  'x-ms-correlation-request-id': '16558262-8812-41a7-92c0-b5a6ed4655ca',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090544Z:16558262-8812-41a7-92c0-b5a6ed4655ca',
  date: 'Mon, 27 Apr 2015 09:05:43 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/99bebe71-7cc9-4b46-a6fe-56cde9b20f7c?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e3b5a5fa-acdc-4b0a-bc52-297602486971',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31956',
  'x-ms-correlation-request-id': '16558262-8812-41a7-92c0-b5a6ed4655ca',
  'x-ms-routing-request-id': 'EASTASIA:20150427T090544Z:16558262-8812-41a7-92c0-b5a6ed4655ca',
  date: 'Mon, 27 Apr 2015 09:05:43 GMT',
  connection: 'close' });
 return result; }]];