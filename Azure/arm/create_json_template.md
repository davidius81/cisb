

# Create your own Json template for ARM v2
*Source: https://azure.microsoft.com/en-us/documentation/articles/resource-group-authoring-templates/*



## Create a Azure deployment template

```json
# cd /opt/cgi/git/tooling/csib/Azure/scripts/cgi/template
# mkdir Centos
# cd !$
# wget --no-check-certificate https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#
```

List the Publishers 
```yaml
# azure vm image list-publishers eastus| grep OpenLogic
data:    OpenLogic                                       eastus
```

List the Offer
```yaml
# azure  vm image list-offers eastus OpenLogic
info:    Executing command vm image list-offers
+ Getting virtual machine image offers (Publisher: "OpenLogic" Location:"eastus")
data:    Publisher  Offer   Location
data:    ---------  ------  --------
data:    OpenLogic  CentOS  eastus
info:    vm image list-offers command OK
```


List the Sku
```yaml
# azure  vm image list-skus eastus  OpenLogic CentOS
info:    Executing command vm image list-skus
+ Getting virtual machine image skus (Publisher:"OpenLogic" Offer:"CentOS" Location:"eastus")
data:    Publisher  Offer   sku  Location
data:    ---------  ------  ---  --------
data:    OpenLogic  CentOS  6.5  eastus
data:    OpenLogic  CentOS  6.6  eastus
data:    OpenLogic  CentOS  7.0  eastus
data:    OpenLogic  CentOS  7.1  eastus
info:    vm image list-skus command OK
```
List Images
```yaml
# azure vm image list  eastus  OpenLogic CentOS 7.1
info:    Executing command vm image list
+ Getting virtual machine images (Publisher:"OpenLogic" Offer:"CentOS" Sku: "7.1" Location:"eastus")
data:    Publisher  Offer   Sku  Version       Location  Urn
data:    ---------  ------  ---  ------------  --------  ---------------------------------
data:    OpenLogic  CentOS  7.1  7.1.201504    eastus    OpenLogic:CentOS:7.1:7.1.201504
data:    OpenLogic  CentOS  7.1  7.1.201506    eastus    OpenLogic:CentOS:7.1:7.1.201506
data:    OpenLogic  CentOS  7.1  7.1.20150731  eastus    OpenLogic:CentOS:7.1:7.1.20150731
info:    vm image list command OK
```

List Ubuntu images:
```yaml
# azure vm image list-skus  eastus  Canonical UbuntuServer
info:    Executing command vm image list-skus
+ Getting virtual machine image skus (Publisher:"Canonical" Offer:"UbuntuServer" Location:"eastus")
data:    Publisher  Offer         sku                Location
data:    ---------  ------------  -----------------  --------
data:    Canonical  UbuntuServer  12.04.2-LTS        eastus
data:    Canonical  UbuntuServer  12.04.3-LTS        eastus
data:    Canonical  UbuntuServer  12.04.4-LTS        eastus
data:    Canonical  UbuntuServer  12.04.5-DAILY-LTS  eastus
data:    Canonical  UbuntuServer  12.04.5-LTS        eastus
data:    Canonical  UbuntuServer  12.10              eastus
data:    Canonical  UbuntuServer  14.04-beta         eastus
data:    Canonical  UbuntuServer  14.04.0-LTS        eastus
data:    Canonical  UbuntuServer  14.04.1-LTS        eastus
data:    Canonical  UbuntuServer  14.04.2-DAILY-LTS  eastus
data:    Canonical  UbuntuServer  14.04.2-LTS        eastus
data:    Canonical  UbuntuServer  14.04.3-DAILY-LTS  eastus
data:    Canonical  UbuntuServer  14.04.3-LTS        eastus
data:    Canonical  UbuntuServer  14.10              eastus
data:    Canonical  UbuntuServer  14.10-beta         eastus
data:    Canonical  UbuntuServer  14.10-DAILY        eastus
data:    Canonical  UbuntuServer  15.04              eastus
data:    Canonical  UbuntuServer  15.04-beta         eastus
data:    Canonical  UbuntuServer  15.04-DAILY        eastus
data:    Canonical  UbuntuServer  15.10              eastus
data:    Canonical  UbuntuServer  15.10-alpha        eastus
data:    Canonical  UbuntuServer  15.10-DAILY        eastus
info:    vm image list-skus command OK
```


Edit the template json and parameters:

### Initiate the deployment:

Create a Ressource Group:
```
# azure group create -n rgPuppetPOC01 -l "East US"
```
Output:
```yaml
info:    Executing command group create
+ Getting resource group rgPuppetPOC01
+ Creating resource group rgPuppetPOC01
info:    Created resource group rgPuppetPOC01
data:    Id:                  /subscriptions/####/resourceGroups/rgPuppetPOC01
data:    Name:                rgPuppetPOC01
data:    Location:            eastus
data:    Provisioning State:  Succeeded
data:    Tags:
data:
info:    group create command OK
```
Deploy the vm:

```
# azure group deployment create \
 -f /opt/cgi/git/tooling/csib/Azure/scripts/cgi/template/linux_template/azuredeploy-custom_v2.json \
 -e /opt/cgi/git/tooling/csib/Azure/scripts/cgi/template/linux_template/azuredeploy-parameters.json \
 -g rgPuppetPOC01 \
 -n deloyPuppetPOC01
```

Ouput:
```yaml
info:    Executing command group deployment create
+ Initializing template configurations and parameters
error:   Unexpected string
info:    Error information has been recorded to /root/.azure/azure.err
error:   group deployment create command failed

```

Show the error messages:


```yaml
# azure insights logs list -g rgPuppetPOC01 -d -b '2015-08-07T15:00:00.991Z'| grep -i error

```

After fixing the quotes in json file:

```yaml
# azure group deployment create  -f /opt/cgi/git/tooling/csib/Azure/scripts/cgi/template/linux_template/azuredeploy-custom_v2.json  -e /opt/cgi/git/tooling/csib/Azure/scripts/cgi/template/linux_template/azuredeploy-parameters.json  -g rgPuppetPOC01  -n deloyPuppetPOC01
info:    Executing command group deployment create
+ Initializing template configurations and parameters
+ Creating a deployment
info:    Created template deployment "deloyPuppetPOC01"
+ Registering providers
info:    Registering provider microsoft.storage
info:    Registering provider microsoft.network
info:    Registering provider microsoft.compute
+ Waiting for deployment to complete
data:    DeploymentName     : deloyPuppetPOC01
data:    ResourceGroupName  : rgPuppetPOC01
data:    ProvisioningState  : Succeeded
data:    Timestamp          : 2015-08-07T21:11:25.0567262Z
data:    Mode               : Incremental
data:    Name                   Type          Value
data:    ---------------------  ------------  --------------------
data:    newStorageAccountName  String        csiblalone01eastus01
data:    adminUsername          String        dlalonde
data:    adminPassword          SecureString  undefined
data:    dnsNameForPublicIP     String        centos71node01
data:    centOSVersion          String        7.1
info:    group deployment create command OK
```

List the Public IP:

```
# azure network public-ip list rgPuppetPOC01
info:    Executing command network public-ip list
+ Getting the public ip addresses
data:    Name        Location  Allocation  IP Address    Idle timeout  DNS Name
data:    ----------  --------  ----------  ------------  ------------  ----------------------------------------
data:    myPublicIP  eastus    Dynamic     40.76.90.181  4             centos71node01.eastus.cloudapp.azure.com
info:    network public-ip list command OK
```


