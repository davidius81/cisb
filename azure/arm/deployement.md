

# IaaS v2  featuring ARM mode

In this example we will deploy a simple Linux vm on Azure

### Create a Ressource Group
```

root@dlscusvmtest1:/opt/cgi/IaaSv2/azure-quickstart-templates/101-simple-linux-vm# azure group create -n rgDlalonde -l "East Us"

info:    Executing command group create
+ Getting resource group rgDlalonde
+ Creating resource group rgDlalonde
info:    Created resource group rgDlalonde
data:    Id:                  /subscriptions/####/resourceGroups/rgDlalonde
data:    Name:                rgDlalonde
data:    Location:            eastus
data:    Provisioning State:  Succeeded
data:    Tags:
data:
info:    group create command OK
```

### Deploy the new vm using a Azure template written in json

```
root@dlscusvmtest1:/opt/cgi/IaaSv2/azure-quickstart-templates/101-simple-linux-vm# azure group deployment create -f /opt/cgi/IaaSv2/azure-quickstart-templates/101-simple-linux-vm/azuredeploy.
azuredeploy.json             azuredeploy.parameters.json
root@dlscusvmtest1:/opt/cgi/IaaSv2/azure-quickstart-templates/101-simple-linux-vm# azure group deployment create -f /opt/cgi/IaaSv2/azure-quickstart-templates/101-simple-linux-vm/azuredeploy.json -e ./azuredeploy.parameters.json -g rgDlalonde -n testdeployement
info:    Executing command group deployment create
+ Initializing template configurations and parameters
+ Creating a deployment
info:    Created template deployment "testdeployement"
+ Registering providers
info:    Registering provider microsoft.storage
info:    Registering provider microsoft.network
info:    Registering provider microsoft.compute
+ Waiting for deployment to complete
error:   Deployment provisioning state was not successful
data:    DeploymentName     : testdeployement
data:    ResourceGroupName  : rgDlalonde
data:    ProvisioningState  : Failed
data:    Timestamp          : 2015-07-29T21:12:03.1758837Z
data:    Mode               : Incremental
data:    Name                   Type          Value
data:    ---------------------  ------------  --------------------
data:    newStorageAccountName  String        uniqueStorageAccount
data:    adminUsername          String        userName
data:    adminPassword          SecureString  undefined
data:    dnsNameForPublicIP     String        uniqueDNS
data:    ubuntuOSVersion        String        14.04.2-LTS
info:    group deployment create command OK
```