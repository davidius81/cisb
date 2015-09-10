
* Call class based on OS type:


root@sytem# facter -p os
{"name"=>"CentOS", "family"=>"RedHat", "release"=>{"major"=>"7", "minor"=>"0", "full"=>"7.0.1406"}}


#we capture release hash
$curr_os = $os['release']

case $curr_os['major'] {
  '7': { .... something }
  *: {something}
}
