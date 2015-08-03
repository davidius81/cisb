

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

```
# azure insights logs list -g  dies_dlalonde4 -d -b '2015-08-03T19:00:00.991Z' -e '2015-08-03T22:00:00.991Z'
info:    Executing command insights logs list
- Querying "eventTimestamp ge '2015-08-03T19:00:00.991Z' and eventTimestamp le '2015-08-03T22:00:00.991Z' and resourceGroupName eq 'dies_dlalon+e4'"
info:    insights logs list command OK
```
