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
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew4966\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966\",\r\n  \"etag\": \"W/\\\"4a68a407-eab8-4224-b5dd-85d1b57a33ff\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip1805\",\r\n      \"fqdn\": \"dnstestpubip1805.westus.cloudapp.azure.com\",\r\n      \"reverseFqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '625',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4a68a407-eab8-4224-b5dd-85d1b57a33ff"',
  'x-ms-request-id': 'f7723513-43e4-4a69-a688-18a2ad047c8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31928',
  'x-ms-correlation-request-id': '0152ad26-12de-4d94-bdad-2f0539734609',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111058Z:0152ad26-12de-4d94-bdad-2f0539734609',
  date: 'Mon, 27 Apr 2015 11:10:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966/?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"armpublicipnew4966\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966\",\r\n  \"etag\": \"W/\\\"4a68a407-eab8-4224-b5dd-85d1b57a33ff\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 4,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"dnstestpubip1805\",\r\n      \"fqdn\": \"dnstestpubip1805.westus.cloudapp.azure.com\",\r\n      \"reverseFqdn\": \"dnstestpubip5416.westus.cloudapp.azure.com\"\r\n    }\r\n  },\r\n  \"location\": \"westus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '625',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"4a68a407-eab8-4224-b5dd-85d1b57a33ff"',
  'x-ms-request-id': 'f7723513-43e4-4a69-a688-18a2ad047c8f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31928',
  'x-ms-correlation-request-id': '0152ad26-12de-4d94-bdad-2f0539734609',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111058Z:0152ad26-12de-4d94-bdad-2f0539734609',
  date: 'Mon, 27 Apr 2015 11:10:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/0d53ed8e-e938-4398-8273-5d81f930b8ef?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '0d53ed8e-e938-4398-8273-5d81f930b8ef',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0d53ed8e-e938-4398-8273-5d81f930b8ef?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1170',
  'x-ms-correlation-request-id': '227ae519-4b35-4b18-ac2e-4894eda87ad3',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111103Z:227ae519-4b35-4b18-ac2e-4894eda87ad3',
  date: 'Mon, 27 Apr 2015 11:11:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/armrestestingpubgrp/providers/Microsoft.Network/publicIPAddresses/armpublicipnew4966/?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/0d53ed8e-e938-4398-8273-5d81f930b8ef?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': '0d53ed8e-e938-4398-8273-5d81f930b8ef',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0d53ed8e-e938-4398-8273-5d81f930b8ef?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1170',
  'x-ms-correlation-request-id': '227ae519-4b35-4b18-ac2e-4894eda87ad3',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111103Z:227ae519-4b35-4b18-ac2e-4894eda87ad3',
  date: 'Mon, 27 Apr 2015 11:11:02 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0d53ed8e-e938-4398-8273-5d81f930b8ef?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '25024c37-c85f-4763-b3d5-eb70a55b15db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31938',
  'x-ms-correlation-request-id': '9987e928-d09b-41ee-9890-60f4ad90565e',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111114Z:9987e928-d09b-41ee-9890-60f4ad90565e',
  date: 'Mon, 27 Apr 2015 11:11:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/0d53ed8e-e938-4398-8273-5d81f930b8ef?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '25024c37-c85f-4763-b3d5-eb70a55b15db',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31938',
  'x-ms-correlation-request-id': '9987e928-d09b-41ee-9890-60f4ad90565e',
  'x-ms-routing-request-id': 'EASTASIA:20150427T111114Z:9987e928-d09b-41ee-9890-60f4ad90565e',
  date: 'Mon, 27 Apr 2015 11:11:13 GMT',
  connection: 'close' });
 return result; }]];