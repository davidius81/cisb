
node cosneuqapm01 {

  docker::image {'million12/mariadb':}


docker::run {'zabbix-db':
   image           => 'million12/mariadb',
   ports           => '3306:3306',
   use_name        => 'true',
   volumes         => '/srv/docker/zabbix-db/mariadb/:/var/lib/mysql',
   env             => ['MARIADB_USER=username','MARIADB_PASS=my_password'],
   hostname        => 'zabbix-db',
   restart_service => true,
   pull_on_start   => false,
}


docker::run {'zabbix-server':
   image           => 'million12/zabbix-server',
   ports           => ['30080:80','10051:10051'],
   use_name        => 'true',
   volumes         => ['/srv/docker/zabbix/zabbix-server/conf/:/usr/local/etc/','/srv/docker/zabbix/zabbix-server/externalscripts/:/usr/local/share/zabbix/externalscripts/'],
   env             => ['DB_ADDRESS=cosneuqapm01','DB_USER=username','DB_PASS=my_password'],
   hostname        => 'zabbix-server',
   restart_service => true,
   pull_on_start   => false,
}
}


docker::run {'zabbix-agent':
   image           => 'million12/zabbix-agent',
   ports           => ['10050:10050'],
   use_name        => 'true',
   volumes         => '/srv/docker/zabbix/zabbix-agent-config.conf:/etc/zabbix_agentd.conf',
   env             => ['ZABBIX_SERVER=cosneuqapm01'],
   hostname        => 'zabbix-agent',
   restart_service => true,
   pull_on_start   => false,
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
