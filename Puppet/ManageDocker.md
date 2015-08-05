
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
```puppet
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

I will use the defaut environment named **production**.

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


Now I'm going to build and run a Docker Registry on my node cosneuqanode03 which is a Centos 7.1.

*Source:(https://docs.docker.com/registry/deploying/)*

```puppet
#  vi csibnode.pp

node 'cosneuqanode03' {

docker::image { 'registry:2':}

docker::run {'cgiregistry01':
   image           => 'registry:2',
   ports           => '5000:5000',
   use_name        => 'true',
   volumes         => '/myregistrydata:/var/lib/registry',
   env             => 'REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY=/var/lib/registry',
   restart_service => true,
   pull_on_start   => false,
   before_stop     => 'echo "So Long, and Thanks for All the Fish"',
}

```

On the client node, apply the change and verify if the image has been pull on the server and check:

```puppet
[root@cosneuqanode03 ~]# /opt/puppetlabs/bin/puppet agent --t
...
[root@cosneuqanode03 ~]# docker images
REPOSITORY                        TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
docker.io/ubuntu                  latest              63e3c10217b8        23 hours ago        188.3 MB
docker.io/ubuntu                  precise             d0e008c6cf02        23 hours ago        134.7 MB
docker.io/registry                2                   b4ad0b763f11        3 weeks ago         548.6 MB

```
List running containers and see if the new private docker registry is running
```
[root@cosneuqanode03 ~]# docker ps
CONTAINER ID        IMAGE               COMMAND                CREATED             STATUS              PORTS                    NAMES
7c2bc44af430        registry:2          "registry cmd/regist   3 minutes ago      Up 3 minutes       0.0.0.0:5000->5000/tcp   cgiregistry01   
      

```

```puppet
[root@cosneuqanode03 ~]# /opt/puppetlabs/bin/puppet  agent -t
Info: Retrieving pluginfacts
Info: Retrieving plugin
Info: Loading facts
Info: Caching catalog for cosneuqanode03.cosneumgmtcs01.b6.internal.cloudapp.net
Info: Applying configuration version '1438790059'
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Image[registry:2]/Exec[docker pull registry:2]/returns: executed successfully
Notice: Applied catalog in 2.18 seconds

```


Generate a SSL certificate for the Docker Registry

```

[root@cosneuqanode03 ~]# 
[root@cosneuqanode03 ~]# openssl genrsa -out client.key 1024
Generating RSA private key, 1024 bit long modulus
........++++++
.......++++++
e is 65537 (0x10001)
[root@cosneuqanode03 ~]# openssl req -new -x509 -text -key client.key -out client.cert
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [XX]:CA
State or Province Name (full name) []:QUEBEC
Locality Name (eg, city) [Default City]:MONTREAL
Organization Name (eg, company) [Default Company Ltd]:CGI
Organizational Unit Name (eg, section) []:GIS
Common Name (eg, your name or your server's hostname) []:cosneuqanode03
Email Address []:david.lalonde@cgi.com



```

Populate Docker Registry
```
[root@cosneuqanode03 ~]# docker images
REPOSITORY                        TAG                 IMAGE ID            CREATED             VIRTUAL SIZE
localhost:5000/batman/ubuntu      latest              63e3c10217b8        25 hours ago        188.3 MB
cosneuqanode03:5000/csib/ubuntu   latest              63e3c10217b8        25 hours ago        188.3 MB
docker.io/ubuntu                  latest              63e3c10217b8        25 hours ago        188.3 MB
docker.io/ubuntu                  precise             d0e008c6cf02        25 hours ago        134.7 MB
docker.io/registry                2                   b4ad0b763f11        3 weeks ago         548.6 MB
[root@cosneuqanode03 ~]#  docker push localhost:5000/batman/ubuntu
The push refers to a repository [localhost:5000/batman/ubuntu] (len: 1)
63e3c10217b8: Image already exists
389028aa9e91: Image successfully pushed
dac7bccb8ac3: Image successfully pushed
2eaf0096818b: Image successfully pushed
Digest: sha256:bdb5c1d1d2f0a85e503d1beb4da6b54ed20ba533a557d6095567e42cea35fe01

```


[root@cosneuqanode03 ~]# tree -L 5 /myregistrydata
/myregistrydata
└── docker
    └── registry
        └── v2
            ├── blobs
            │   └── sha256
            └── repositories
                └── batman

7 directories, 0 files

