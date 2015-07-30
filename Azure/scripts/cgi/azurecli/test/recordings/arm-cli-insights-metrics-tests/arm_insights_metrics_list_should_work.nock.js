// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_SQL_RESOURCE_LOCATION'] = 'West US';
  process.env['AZURE_ARM_TEST_WEBSITES_RESOURCE_LOCATION'] = 'South Central US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/%2Fsubscriptions%2Fb67f7fec-69fc-4974-9099-a26bd6ffeda3%2FresourceGroups%2FDefault-Web-brazilsouth%2Fproviders%2Fmicrosoft.web%2FserverFarms%2FDefault1/metrics?api-version=2014-04-01&$filter=timeGrain%20eq%20duration%27PT1M%27%20and%20startTime%20eq%202015-04-14T17%3A27%3A00.000Z%20and%20endTime%20eq%202015-04-14T18%3A27%3A00.000Z')
  .reply(200, "{\"value\":[{\"name\":{\"value\":\"CpuPercentage\",\"localizedValue\":\"CPU Percentage\"},\"unit\":\"Percent\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"MemoryPercentage\",\"localizedValue\":\"Memory Percentage\"},\"unit\":\"Percent\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"DiskQueueLength\",\"localizedValue\":\"Disk Queue Length\"},\"unit\":\"Count\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"HttpQueueLength\",\"localizedValue\":\"Http Queue Length\"},\"unit\":\"Count\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"BytesReceived\",\"localizedValue\":\"Data In\"},\"unit\":\"Bytes\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"BytesSent\",\"localizedValue\":\"Data Out\"},\"unit\":\"Bytes\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1352',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '036b1df1-cc32-4490-aa7b-9d8c5ceb695f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31844',
  'x-ms-correlation-request-id': '7790cab2-8ed0-4fed-95dd-e35e7b1bc66a',
  'x-ms-routing-request-id': 'WESTUS:20150416T212958Z:7790cab2-8ed0-4fed-95dd-e35e7b1bc66a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Apr 2015 21:29:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/%2Fsubscriptions%2Fb67f7fec-69fc-4974-9099-a26bd6ffeda3%2FresourceGroups%2FDefault-Web-brazilsouth%2Fproviders%2Fmicrosoft.web%2FserverFarms%2FDefault1/metrics?api-version=2014-04-01&$filter=timeGrain%20eq%20duration%27PT1M%27%20and%20startTime%20eq%202015-04-14T17%3A27%3A00.000Z%20and%20endTime%20eq%202015-04-14T18%3A27%3A00.000Z')
  .reply(200, "{\"value\":[{\"name\":{\"value\":\"CpuPercentage\",\"localizedValue\":\"CPU Percentage\"},\"unit\":\"Percent\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"MemoryPercentage\",\"localizedValue\":\"Memory Percentage\"},\"unit\":\"Percent\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"DiskQueueLength\",\"localizedValue\":\"Disk Queue Length\"},\"unit\":\"Count\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"HttpQueueLength\",\"localizedValue\":\"Http Queue Length\"},\"unit\":\"Count\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"BytesReceived\",\"localizedValue\":\"Data In\"},\"unit\":\"Bytes\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]},{\"name\":{\"value\":\"BytesSent\",\"localizedValue\":\"Data Out\"},\"unit\":\"Bytes\",\"timeGrain\":\"PT1M\",\"startTime\":\"2015-04-14T17:27:00Z\",\"endTime\":\"2015-04-14T18:27:00Z\",\"metricValues\":[],\"resourceId\":null,\"properties\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1352',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '036b1df1-cc32-4490-aa7b-9d8c5ceb695f',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '31844',
  'x-ms-correlation-request-id': '7790cab2-8ed0-4fed-95dd-e35e7b1bc66a',
  'x-ms-routing-request-id': 'WESTUS:20150416T212958Z:7790cab2-8ed0-4fed-95dd-e35e7b1bc66a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 16 Apr 2015 21:29:58 GMT',
  connection: 'close' });
 return result; }]];