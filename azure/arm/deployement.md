

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


