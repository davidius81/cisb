


### How to Deploy a 3 node CoreOs Cluster using etcd and Fleet.




#### Create a new Resource Group

Make sure to use the same location as your template.

```
# azure group create -n rgdlCoreOSCluster01 -l "West Us"
```
Output
```
info:    Executing command group create
+ Getting resource group rgdlCoreOSCluster01
+ Creating resource group rgdlCoreOSCluster01
info:    Created resource group rgdlCoreOSCluster01
data:    Id:                  /subscriptions/c93a74b7-f399-405c-a8ae-6dc259fe7430/resourceGroups/rgdlCoreOSCluster01
data:    Name:                rgdlCoreOSCluster01
data:    Location:            westus
data:    Provisioning State:  Succeeded
data:    Tags:
data:
info:    group create command OK
```

#### Edit your template 

#### Deploy the cluster 
```
# azure group deployment create  -f ./azuredeploy.json  -e ./azuredeploy-parameters.json  -g rgDlalonde2  -n CoreOsCluster01^C
root@dlscusvmtest1:/opt/cgi/git/csib/Azure/scripts/cgi/IaaSv2/azure-quickstart-templates/coreos-with-fleet-multivm# azure group deployment create  -f ./azuredeploy.json  -e ./azuredeploy-parameters.json  -g rgdlCoreOSCluster01  -n CoreOsCluster01
```



Output
```

````

### Show deployement error log 
```
# azure group log show rgdlCoreOSCluster01
```
Output

```
info:    Executing command group log show
+ Getting group logs
error:   The resource type 'eventtypes' could not be found in the namespace 'microsoft.insights' for api version '2014-04'. The supported api-versions are '2014-04-01,2014-11-01,2015-04-01'.
info:    Error information has been recorded to /root/.azure/azure.err
```

MSOpenTech has released a HotFix to solve this issue.


Now the it's working:




