# User Management with Puppet


## How to gie temporary user access during a change.


** Windows***

[Managing permissions on Windows with access control](http://codebetter.com/robreynolds/2014/11/26/puppetmanaging-permissions-on-windows-with-access-control-lists/)


** Linux **


* Make a custom fact
 Using a custom fact each node can determine its change window state and then just use some logic around that to decide to add or remove users?

``` 
ensure => $under_maintenance ? {true => "present", false => "absent"}
```
