
#Install gitlab
Install gitlab using Puppet

# Inside the container, install gitlab-shell


# Install gitlab-Shell

This feature will be useful in order to fork reposiroty in command line:
*Source:(https://github.com/gitlabhq/gitlab-shell)*


Download the binaries:
```
root@gitlab:/opt# git clone https://github.com/gitlabhq/gitlab-shell.git
Cloning into 'gitlab-shell'...
remote: Counting objects: 2161, done.
remote: Total 2161 (delta 0), reused 0 (delta 0), pack-reused 2161
Receiving objects: 100% (2161/2161), 423.15 KiB | 0 bytes/s, done.
Resolving deltas: 100% (1193/1193), done.
Checking connectivity... done.
```


To avoid problem you need to re-install ruby:
```
./bin/install
/usr/lib/ruby/2.1.0/psych.rb:464:in `initialize': No such file or directory @ rb_sysopen - /opt/gitlab-shell/config.yml (Errno::ENOENT)
        from /usr/lib/ruby/2.1.0/psych.rb:464:in `open'
        from /usr/lib/ruby/2.1.0/psych.rb:464:in `load_file'
        from /opt/gitlab-shell/lib/gitlab_config.rb:7:in `initialize'
        from ./bin/install:9:in `new'
        from ./bin/install:9:in `<main>'
```

List ruby install 
```
root@gitlab:/opt/gitlab-shell# dpkg --list| grep ruby
ii  libruby2.1:amd64                2.1.6-1bbox1~trusty1             amd64        Libraries necessary to run Ruby 2.1
ii  ruby2.1                         2.1.6-1bbox1~trusty1             amd64        Interpreter of object-oriented scripting language Ruby
ii  rubygems-integration            1.8-1bbox1~trusty1               all          integration of Debian Ruby packages with Rubygems
```

Remove built-in ruby
```
root@gitlab:/opt/gitlab-shell# apt-get remove ruby2.1
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  libgmp10 libruby2.1 rubygems-integration
Use 'apt-get autoremove' to remove them.
The following packages will be REMOVED:
  ruby2.1
0 upgraded, 0 newly installed, 1 to remove and 0 not upgraded.
After this operation, 148 kB disk space will be freed.
Do you want to continue? [Y/n] y
(Reading database ... 16909 files and directories currently installed.)
Removing ruby2.1 (2.1.6-1bbox1~trusty1) ...
``` 


Install from the source
```
# apt-get update
# apt-get install -y g++ make


curl -L --progress http://cache.ruby-lang.org/pub/ruby/2.1/ruby-2.1.5.tar.gz | tar xz
cd ruby-2.1.5
./configure --disable-install-rdoc
make
sudo make install
```

