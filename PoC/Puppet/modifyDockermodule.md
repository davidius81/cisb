

### Add new package name docker-engine

Replaced line 68 in module/docker/manifests/params.pp

From: ```  $package_name   = 'docker'``` to ```$package_name   = 'docker-engine'```

ex:
```ruby
 'RedHat' : {
      if $::operatingsystem == 'Fedora' {
        $package_name   = 'docker-io'
        $use_upstream_package_source = false
      } elsif (versioncmp($::operatingsystemrelease, '7.0') < 0) and $::operatingsystem != 'Amazon' {
        $package_name   = 'docker-io'
        $use_upstream_package_source = true
      } else {
        $package_name   = 'docker-engine'
        $use_upstream_package_source = false
      }
      $package_source_location = ''
      $service_name   = $service_name_default
      $docker_command = $docker_command_default
      ```
