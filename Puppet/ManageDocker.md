
# Automating Docker containers with Puppet.

I'm going to try the following module:
1.Test simple docker deployment 
2. Create a  docker swarm cluster using puppet (https://github.com/garethr/puppet-docker-swarm-example)

###Testing Docker Module from garethr/docker

Basic video https://www.youtube.com/watch?v=RA1WZOk0YCo


Install the Puppet docker module. 

In this example, my Puppet Master server is **cosneuqapm01** and run Puppet Open Source 4.0 on OpenLogic Centos 7.1
```
# ssh cosneuqapm01
# puppet module install garethr-docker
```

Output
```
[root@cosneuqapm01 modules]# puppet module install garethr-docker
Notice: Preparing to install into /etc/puppetlabs/code/environments/production/modules ...
Notice: Downloading from https://forgeapi.puppetlabs.com ...
Notice: Installing -- do not interrupt ...
/etc/puppetlabs/code/environments/production/modules
âââ¬ garethr-docker (v4.1.0)
  âââ puppetlabs-apt (v2.1.1)
  âââ puppetlabs-stdlib (v4.7.0)
  âââ stahnma-epel (v1.0.2)
[root@cosneuqapm01 modules]# cd  /etc/puppetlabs/code/environments/production/modules
[root@cosneuqapm01 modules]# ls -la
total 36
drwxr-xr-x. 9 root root 4096 Aug  4 19:59 .
drwxr-xr-x. 4 root root 4096 Jun  9 17:27 ..
drwxr-xr-x. 7 root root 4096 Jul 28 00:14 apt
drwxr-xr-x. 7 root root 4096 May  1  2013 azure
drwxr-xr-x. 9 root root 4096 Jul 25 10:52 docker
drwxr-xr-x. 6 root root 4096 Dec 12  2014 epel
drwxr-xr-x. 6 root root 4096 Nov  4  2014 motd
drwxr-xr-x. 6 root root 4096 Jul 24 00:01 stdlib
drwxr-xr-x. 5 root root 4096 May 13  2014 windowsazure

```
Install docker on a node and define a DNS server for the containers

This way, docker will be installed on all nodes assigned to this environment.

In this example, I will use the defaut environment named production.

```
# cd /etc/puppetlabs/code/environments/production/manifests/
# mkdir docker && cd docker
# vi  basedocker.pp

class {'docker':
  dns => '168.63.129.16',
}
```
Connect on the node and apply the new facts
```
[root@cosneuqanode03 ~]# /opt/puppetlabs/bin/puppet agent --test
Info: Computing checksum on file /etc/sysconfig/docker
Info: /Stage[main]/Docker::Service/File[/etc/sysconfig/docker]: Filebucketed /etc/sysconfig/docker to puppet with sum 46ee4f99262b5d4a747056ca2206ecdb
Notice: /Stage[main]/Docker::Service/File[/etc/sysconfig/docker]/content: content changed '{md5}46ee4f99262b5d4a747056ca2206ecdb' to '{md5}be789a0e11db1ae5c7c37e1d30b81e55'
Info: /Stage[main]/Docker::Service/File[/etc/sysconfig/docker]: Scheduling refresh of Service[docker]
Notice: /Stage[main]/Docker::Service/File[/etc/sysconfig/docker-storage]/content:
--- /etc/sysconfig/docker-storage       2015-03-30 13:36:57.000000000 +0000
+++ /tmp/puppet-file20150804-2373-1f664bq       2015-08-04 20:27:20.722216100 +0000
@@ -11,4 +11,4 @@
 # one for data).
 # DOCKER_STORAGE_OPTIONS = --storage-opt dm.metadatadev=/dev/mylogvol/my-docker-metadata --storage-opt dm.datadev=/dev/mylogvol/my-docker-data

-DOCKER_STORAGE_OPTIONS=
+DOCKER_STORAGE_OPTIONS=""

Info: Computing checksum on file /etc/sysconfig/docker-storage
Info: /Stage[main]/Docker::Service/File[/etc/sysconfig/docker-storage]: Filebucketed /etc/sysconfig/docker-storage to puppet with sum ab8c4963d7da2df915a052babb0e1b89
Notice: /Stage[main]/Docker::Service/File[/etc/sysconfig/docker-storage]/content: content changed '{md5}ab8c4963d7da2df915a052babb0e1b89' to '{md5}a6d7017ae0cf60008ff76ce39f3a4245'
Info: /Stage[main]/Docker::Service/File[/etc/sysconfig/docker-storage]: Scheduling refresh of Service[docker]
Notice: /Stage[main]/Docker::Service/Service[docker]/ensure: ensure changed 'stopped' to 'running'
Info: /Stage[main]/Docker::Service/Service[docker]: Unscheduling refresh on Service[docker]
Notice: Applied catalog in 95.51 seconds
```

See if docker is running
```
[root@cosneuqanode03 ~]# systemctl status docker
docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; enabled)
   Active: active (running) since Tue 2015-08-04 20:27:43 UTC; 5min ago
     Docs: http://docs.docker.com
 Main PID: 3200 (docker)
   CGroup: /system.slice/docker.service
           ââ3200 /usr/bin/docker -d -H unix:///var/run/docker.sock

Aug 04 20:27:22 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:22Z" level=error msg="WARNING: No --storage-opt dm.thinpooldev spe...on use"
Aug 04 20:27:42 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:42Z" level=info msg="+job init_networkdriver()"
Aug 04 20:27:43 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:43Z" level=info msg="-job init_networkdriver() = OK (0)"
Aug 04 20:27:43 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:43Z" level=info msg="Loading containers: start."
Aug 04 20:27:43 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:43Z" level=info msg="Loading containers: done."
Aug 04 20:27:43 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:43Z" level=info msg="docker daemon: 1.6.2 ba1f6c3/1.6.2; execdrive...mapper"
Aug 04 20:27:43 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:43Z" level=info msg="+job acceptconnections()"
Aug 04 20:27:43 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:43Z" level=info msg="-job acceptconnections() = OK (0)"
Aug 04 20:27:43 cosneuqanode03 docker[3200]: time="2015-08-04T20:27:43Z" level=info msg="Daemon has completed initialization"
Aug 04 20:27:43 cosneuqanode03 systemd[1]: Started Docker Application Container Engine.
Hint: Some lines were ellipsized, use -l to show in full.
```
