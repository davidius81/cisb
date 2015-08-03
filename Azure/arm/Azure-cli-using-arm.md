

## Azure-cli or xplat


### Show deployment error log 
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
Where rgdlCoreOsCluster01 is a Resource Group Name.


Show more detailled logs

```
azure insights logs list -g rgdlCoreOSCluster01 | grep -i fail
```
