
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
