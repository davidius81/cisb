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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=teststorage101;AccountKey=null';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://teststorage101.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(404, "", { 'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '949eb4e0-0001-0027-50ee-97b67a000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 03:50:48 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://teststorage101.blob.core.windows.net:443')
  .put('/storageclitest?restype=container')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 13 Mar 2015 03:50:49 GMT',
  etag: '"0x8D22B5807B5A9CA"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '7b86c477-0001-0078-7fcd-eff067000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 03:50:49 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://teststorage101.blob.core.windows.net:443')
  .head('/storageclitest?restype=container')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 13 Mar 2015 03:50:49 GMT',
  etag: '"0x8D22B5807B5A9CA"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '6f1380cf-0001-0014-2c71-120356000000',
  'x-ms-version': '2014-02-14',
  'x-ms-lease-status': 'unlocked',
  'x-ms-lease-state': 'available',
  date: 'Fri, 13 Mar 2015 03:50:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://teststorage101.blob.core.windows.net:443')
  .get('/storageclitest?restype=container&comp=acl')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><SignedIdentifiers />", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  'last-modified': 'Fri, 13 Mar 2015 03:50:49 GMT',
  etag: '"0x8D22B5807B5A9CA"',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '3c04e93f-0001-0050-2b4c-6e56e5000000',
  'x-ms-version': '2014-02-14',
  date: 'Fri, 13 Mar 2015 03:50:49 GMT' });
 return result; }]];