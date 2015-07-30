
 
# IaaS v2  featuring ARM mode

In this example we will deploy a simple Linux vm on Azure

### Create a Ressource Group
```
# azure group create -n rgDlalonde2 -l "West Us"
```

This will show you the following output.
```
info:    Executing command group create
+ Getting resource group rgDlalonde2
+ Creating resource group rgDlalonde2
info:    Created resource group rgDlalonde2
data:    Id:                  /subscriptions/c93a74b7-f399-405c-a8ae-6dc259fe7430/resourceGroups/rgDlalonde2
data:    Name:                rgDlalonde2
data:    Location:            westus
data:    Provisioning State:  Succeeded
data:    Tags:
data:
info:    group create command OK

```

Modify the parameters values

```
# vi azuredeploy.parameters.json
{
    "newStorageAccountName": {
        "value": "storedlalonde"
    },
    "adminUsername": {
        "value": "dlalonde"
    },
    "adminPassword": {
        "value": "test12345!"
    },
    "dnsNameForPublicIP": {
        "value": "bozomachine123"
    },
    "ubuntuOSVersion": {
        "value": "14.04.2-LTS"
    }
}


```
### Deploy the new vm using a Azure json template 


```
# azure group deployment create \
 -f /opt/cgi/IaaSv2/azure-quickstart-templates/101-simple-linux-vm/azuredeploy.json \
 -e ./azuredeploy.parameters.json \
 -g rgDlalonde2 \
 -n testdeployement2
```

Output
```
info:    Executing command group deployment create
+ Initializing template configurations and parameters
+ Creating a deployment
info:    Created template deployment "testdeployement2"
+ Registering providers
info:    Registering provider microsoft.storage
info:    Registering provider microsoft.network
info:    Registering provider microsoft.compute
+ Waiting for deployment to complete
data:    DeploymentName     : testdeployement2
data:    ResourceGroupName  : rgDlalonde2
data:    ProvisioningState  : Succeeded
data:    Timestamp          : 2015-07-30T21:10:07.6172567Z
data:    Mode               : Incremental
data:    Name                   Type          Value
data:    ---------------------  ------------  --------------
data:    newStorageAccountName  String        storedlalonde
data:    adminUsername          String        dlalonde
data:    adminPassword          SecureString  undefined
data:    dnsNameForPublicIP     String        bozomachine123
data:    ubuntuOSVersion        String        14.04.2-LTS
info:    group deployment create command OK

```
