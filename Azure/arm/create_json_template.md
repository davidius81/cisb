

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
