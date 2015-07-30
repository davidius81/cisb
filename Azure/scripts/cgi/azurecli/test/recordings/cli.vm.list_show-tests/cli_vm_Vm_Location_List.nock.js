// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
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
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/c9cbd920-c00c-427c-852b-8aaf38badaeb/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'aa771372ae7384baa8540b84cf0d3524',
  date: 'Sun, 15 Mar 2015 23:23:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/c9cbd920-c00c-427c-852b-8aaf38badaeb/locations')
  .reply(200, "<Locations xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Location><Name>North Europe</Name><DisplayName>North Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>West Europe</Name><DisplayName>West Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>East US 2</Name><DisplayName>East US 2</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize><RoleSize>Standard_G1</RoleSize><RoleSize>Standard_G2</RoleSize><RoleSize>Standard_G3</RoleSize><RoleSize>Standard_G4</RoleSize><RoleSize>Standard_G5</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>Central US</Name><DisplayName>Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>South Central US</Name><DisplayName>South Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>West US</Name><DisplayName>West US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize><RoleSize>Standard_G1</RoleSize><RoleSize>Standard_G2</RoleSize><RoleSize>Standard_G3</RoleSize><RoleSize>Standard_G4</RoleSize><RoleSize>Standard_G5</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>North Central US</Name><DisplayName>North Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>East US</Name><DisplayName>East US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A10</RoleSize><RoleSize>A11</RoleSize><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>A8</RoleSize><RoleSize>A9</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>Southeast Asia</Name><DisplayName>Southeast Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location><Location><Name>East Asia</Name><DisplayName>East Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices><ComputeCapabilities><WebWorkerRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></WebWorkerRoleSizes><VirtualMachinesRoleSizes><RoleSize>A5</RoleSize><RoleSize>A6</RoleSize><RoleSize>A7</RoleSize><RoleSize>Basic_A0</RoleSize><RoleSize>Basic_A1</RoleSize><RoleSize>Basic_A2</RoleSize><RoleSize>Basic_A3</RoleSize><RoleSize>Basic_A4</RoleSize><RoleSize>ExtraLarge</RoleSize><RoleSize>ExtraSmall</RoleSize><RoleSize>Large</RoleSize><RoleSize>Medium</RoleSize><RoleSize>Small</RoleSize><RoleSize>Standard_D1</RoleSize><RoleSize>Standard_D11</RoleSize><RoleSize>Standard_D12</RoleSize><RoleSize>Standard_D13</RoleSize><RoleSize>Standard_D14</RoleSize><RoleSize>Standard_D2</RoleSize><RoleSize>Standard_D3</RoleSize><RoleSize>Standard_D4</RoleSize></VirtualMachinesRoleSizes></ComputeCapabilities><StorageCapabilities><StorageAccountTypes><StorageAccountType>Standard_LRS</StorageAccountType><StorageAccountType>Standard_ZRS</StorageAccountType><StorageAccountType>Standard_GRS</StorageAccountType><StorageAccountType>Standard_RAGRS</StorageAccountType></StorageAccountTypes></StorageCapabilities></Location></Locations>", { 'cache-control': 'no-cache',
  'content-length': '19895',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '385b8890d6e68fe995032fc00d568227',
  date: 'Sun, 15 Mar 2015 23:23:33 GMT' });
 return result; }]];