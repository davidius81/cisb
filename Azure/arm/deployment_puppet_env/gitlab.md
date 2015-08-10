




# Apply the change manually on the node:

```puppet
[root@cosneuqanode03 ~]# /opt/puppetlabs/bin/puppet  agent -t
Info: Retrieving pluginfacts
Info: Retrieving plugin
Info: Loading facts
Info: Caching catalog for cosneuqanode03.cosneumgmtcs01.b6.internal.cloudapp.net
Info: Applying configuration version '1439218580'
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Image[registry:2]/Exec[docker pull registry:2]/returns: executed successfully
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Image[sameersbn/postgresql:latest]/Exec[docker pull sameersbn/postgresql:latest]/returns: executed successfully
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Image[sameersbn/redis:latest]/Exec[docker pull sameersbn/redis:latest]/returns: executed successfully
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Image[sameersbn/gitlab:latest]/Exec[docker pull sameersbn/gitlab:latest]/returns: executed successfully
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-postgresql]/File[/etc/systemd/system/docker-gitlab-postgresql.service]/content:
--- /etc/systemd/system/docker-gitlab-postgresql.service        2015-08-10 14:15:43.134216100 +0000
+++ /tmp/puppet-file20150810-56944-37sxq1       2015-08-10 14:56:49.373216100 +0000
@@ -15,7 +15,7 @@
 ExecStartPre=-/usr/bin/docker kill gitlab-postgresql
 ExecStartPre=-/usr/bin/docker rm gitlab-postgresql
 ExecStart=/usr/bin/docker run \
-        -h 'gitlab-postgresql' --net bridge -m 0b -e DB_NAME=gitlabhq_production -e DB_PASS=password -v /mygitlab/postgresql:/var/lib/postgresql  \
+        -h 'gitlab-postgresql' --net bridge -m 0b -e DB_NAME=gitlabhq_production -e DB_PASS=password -v /srv/docker/gitlab/postgresql:/var/lib/postgresql  \
         --name gitlab-postgresql \
         sameersbn/postgresql:latest \


Info: Computing checksum on file /etc/systemd/system/docker-gitlab-postgresql.service
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-postgresql]/File[/etc/systemd/system/docker-gitlab-postgresql.service]: Filebucketed /etc/systemd/system/docker-gitlab-postgresql.service to puppet with sum 5f3e9c5dde230c796eb60811a49abfc1
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-postgresql]/File[/etc/systemd/system/docker-gitlab-postgresql.service]/content: content changed '{md5}5f3e9c5dde230c796eb60811a49abfc1' to '{md5}2203c7d482683162e8ccfd9849241279'
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-postgresql]/File[/etc/systemd/system/docker-gitlab-postgresql.service]: Scheduling refresh of Exec[docker-systemd-reload]
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-postgresql]/File[/etc/systemd/system/docker-gitlab-postgresql.service]: Scheduling refresh of Service[docker-gitlab-postgresql]
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-redis]/File[/etc/systemd/system/docker-gitlab-redis.service]/content:
--- /etc/systemd/system/docker-gitlab-redis.service     2015-08-10 14:15:43.211216100 +0000
+++ /tmp/puppet-file20150810-56944-128yfk5      2015-08-10 14:56:50.061216100 +0000
@@ -15,7 +15,7 @@
 ExecStartPre=-/usr/bin/docker kill gitlab-redis
 ExecStartPre=-/usr/bin/docker rm gitlab-redis
 ExecStart=/usr/bin/docker run \
-        -h 'gitlab-redis' --net bridge -m 0b -v /mygitlab/redis:/var/lib/redis  \
+        -h 'gitlab-redis' --net bridge -m 0b -v /srv/docker/gitlab/redis:/var/lib/redis  \
         --name gitlab-redis \
         sameersbn/redis:latest \


Info: Computing checksum on file /etc/systemd/system/docker-gitlab-redis.service
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-redis]/File[/etc/systemd/system/docker-gitlab-redis.service]: Filebucketed /etc/systemd/system/docker-gitlab-redis.service to puppet with sum ef750ef1a16a488d6f1e0b05458bcfbd
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-redis]/File[/etc/systemd/system/docker-gitlab-redis.service]/content: content changed '{md5}ef750ef1a16a488d6f1e0b05458bcfbd' to '{md5}befc6edd7ed2add8dd6197fe33163aa4'
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-redis]/File[/etc/systemd/system/docker-gitlab-redis.service]: Scheduling refresh of Exec[docker-systemd-reload]
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-redis]/File[/etc/systemd/system/docker-gitlab-redis.service]: Scheduling refresh of Service[docker-gitlab-redis]
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab]/File[/etc/systemd/system/docker-gitlab.service]/content:
--- /etc/systemd/system/docker-gitlab.service   2015-08-10 14:15:43.303216100 +0000
+++ /tmp/puppet-file20150810-56944-jjt5e8       2015-08-10 14:56:50.262216100 +0000
@@ -15,7 +15,7 @@
 ExecStartPre=-/usr/bin/docker kill gitlab
 ExecStartPre=-/usr/bin/docker rm gitlab
 ExecStart=/usr/bin/docker run \
-        -h 'gitlab' --net bridge -m 0b --link gitlab-postgresql:postgresql --link gitlab-redis:redisio -e GITLAB_PORT=10080 -e GITLAB_SSH_PORT=10022 -p 10022:22 -p 10080:80 -v /mygitlab/gitlab/gitlab:/home/git/data  \
+        -h 'gitlab' --net bridge -m 0b --link gitlab-postgresql:postgresql --link gitlab-redis:redisio -e GITLAB_PORT=10080 -e GITLAB_SSH_PORT=10022 -p 10022:22 -p 10080:80 -v /srv/docker/gitlab/gitlab:/home/git/data  \
         --name gitlab \
         sameersbn/gitlab:latest \


Info: Computing checksum on file /etc/systemd/system/docker-gitlab.service
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab]/File[/etc/systemd/system/docker-gitlab.service]: Filebucketed /etc/systemd/system/docker-gitlab.service to puppet with sum e2876d402c77b577c2e03e4c648ec0fe
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab]/File[/etc/systemd/system/docker-gitlab.service]/content: content changed '{md5}e2876d402c77b577c2e03e4c648ec0fe' to '{md5}6d1862a55c99199da1f6dc7045e2d8f2'
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab]/File[/etc/systemd/system/docker-gitlab.service]: Scheduling refresh of Exec[docker-systemd-reload]
Info: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab]/File[/etc/systemd/system/docker-gitlab.service]: Scheduling refresh of Service[docker-gitlab]
Notice: /Stage[main]/Docker::Systemd_reload/Exec[docker-systemd-reload]: Triggered 'refresh' from 3 events
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-postgresql]/Service[docker-gitlab-postgresql]: Triggered 'refresh' from 1 events
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab-redis]/Service[docker-gitlab-redis]: Triggered 'refresh' from 1 events
Notice: /Stage[main]/Main/Node[cosneuqanode03]/Docker::Run[gitlab]/Service[docker-gitlab]: Triggered 'refresh' from 1 events
Notice: Applied catalog in 56.59 seconds
[root@cosneuqanode03 ~]#
```


#Gitlab containers
```puppet
# docker ps
CONTAINER ID        IMAGE                         COMMAND                CREATED             STATUS              PORTS                                                   NAMES
99cf832c938a        sameersbn/gitlab:latest       "/sbin/entrypoint.sh   21 seconds ago      Up 12 seconds       443/tcp, 0.0.0.0:10022->22/tcp, 0.0.0.0:10080->80/tcp   gitlab
4165e74ea8aa        sameersbn/redis:latest        "/sbin/entrypoint.sh   18 minutes ago      Up 18 minutes       6379/tcp                                                gitlab-redis
1136043d0074        sameersbn/postgresql:latest   "/start"               18 minutes ago      Up 18 minutes       5432/tcp                                                gitlab-postgresql
0abc723b5590        registry:2                    "registry cmd/regist   2 days ago          Up 2 days           0.0.0.0:5000->5000/tcp                                  cgiregistry01
29491b9e5719        ubuntu:latest                 "/bin/sh -c 'while t   2 days ago          Up 2 days                                                                   helloworld
```
