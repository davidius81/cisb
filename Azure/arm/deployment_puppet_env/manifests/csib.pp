
node 'cosneuqanode03' {
docker::image { 'ubuntu':
  image_tag => 'precise'
}

#Pull Images
docker::image { 'registry:2':}
docker::image { 'sameersbn/gitlab:7.13.4': ensure => 'absent' }
docker::image { 'cosneuqanode03:5000/csib/gitlab-postgresql:9.4-3':}
docker::image { 'cosneuqanode03:5000/csib/redis:latest':}
docker::image { 'cosneuqanode03:5000/csib/gitlab:7.13.4':}

#docker::registry { 'cosneuqanode03:5000': }

docker::run {'cgiregistry01':
   image           => 'registry:2',
   ports           => '5000:5000',
   use_name        => 'true',
   volumes         => '/myregistrydata:/var/lib/registry',
   env             => 'REGISTRY_STORAGE_FILESYSTEM_ROOTDIRECTORY=/var/lib/registry',
   hostname        => 'cgiregistry01',
   restart_service => true,
   pull_on_start   => false,
   before_stop     => 'echo "So Long, and Thanks for All the Fish"',
}

# Git Lab Environment
docker::run {'gitlab-postgresql':
   image           => 'cosneuqanode03:5000/csib/gitlab-postgresql:9.4-3',
   use_name            => 'true',
   volumes         => '/srv/docker/gitlab/postgresql:/var/lib/postgresql',
   env             => ['DB_NAME=gitlabhq_production','DB_USER=gitlab', 'DB_PASS=password'],
   hostname            => 'gitlab-postgresql',
   restart_service => true,
   pull_on_start   => false,
   before_stop     => 'echo "So Long, and Thanks for All the Fish"',
}

docker::run {'gitlab-redis':
   image           => 'cosneuqanode03:5000/csib/redis:latest',
   use_name        => 'true',
   volumes         => '/srv/docker/gitlab/redis:/var/lib/redis',
   hostname        => 'gitlab-redis',
   restart_service => true,
   pull_on_start   => false,
   before_stop     => 'echo "So Long, and Thanks for All the Fish"',
}

docker::run {'gitlab':
   image           => 'cosneuqanode03:5000/csib/gitlab:7.13.4',
   use_name        => 'true',
   volumes         => '/srv/docker/gitlab/gitlab:/home/git/data',
   links           => ['gitlab-postgresql:postgresql','gitlab-redis:redisio'],
   ports           => ['10022:22','10080:80'],
   env             => ['GITLAB_PORT=10080','GITLAB_SSH_PORT=10022'],
   hostname        => 'gitlab',
   restart_service => true,
   pull_on_start   => false,
   before_stop     => 'echo "So Long, and Thanks for All the Fish"',
}


#HAPROXY
docker::run {'haproxy01':
   image           => 'haproxy',
   use_name        => 'true',
   volumes         => '/srv/docker/haproxy/:/usr/local/etc/haproxy/',
   ports           => '20080:80',
   hostname        => 'haproxy01',
   restart_service => true,
   pull_on_start   => false,
   before_stop     => 'echo "So Long, and Thanks for All the Fish"',
}


# Sample
#docker::run { 'helloworld':
#  image           => 'base',
#  command         => '/bin/sh -c "while true; do echo hello world; sleep 1; done"',
#  ports           => ['4444', '4555'],
#  expose          => ['4666', '4777'],
#  links           => ['mysql:db'],
#  use_name        => true,
#  volumes         => ['/var/lib/couchdb', '/var/log'],
#  volumes_from    => '6446ea52fbc9',
#  memory_limit    => '10m', # (format: '<number><unit>', where unit = b, k, m or g)
#  cpuset          => ['0', '3'],
#  username        => 'example',
#  hostname        => 'example.com',
#  env             => ['FOO=BAR', 'FOO2=BAR2'],
#  env_file        => ['/etc/foo', '/etc/bar'],
#  restart_service => true,
#  privileged      => false,
#  pull_on_start   => false,
#  before_stop     => 'echo "So Long, and Thanks for All the Fish"',
#}

}
