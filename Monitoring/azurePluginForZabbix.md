# Windows Azure Monitor plugin

Dependencies
------------

	* Python 2.6 or 2.7
	* azure - Window Azure sdk for Python
	* argparse - For Python 2.6
	* OpenSSL - pyOpenSSL
	* pyodbc - Connect to SQL Azure
	* FreeTDS - Used by ODBC to connect to SQL Azure
	
	
*Source:(https://github.com/MsOpenTech/WaMo)*

1. Install Python
```
#
# yum install -y python 

```

2. Download the plugin
```
 git clone https://github.com/MSOpenTech/wamo.git
```

3. Install the Plugin

```
# python setup.py install
running install
running build
running build_py
creating build
creating build/lib
creating build/lib/azuremonitor
copying azuremonitor/publishsettings.py -> build/lib/azuremonitor
copying azuremonitor/__init__.py -> build/lib/azuremonitor
running build_scripts
creating build/scripts-2.7
copying and adjusting check_azure_compute.py -> build/scripts-2.7
copying and adjusting check_azure_ad.py -> build/scripts-2.7
copying and adjusting check_azure_sql.py -> build/scripts-2.7
copying and adjusting check_azure_storage.py -> build/scripts-2.7
copying and adjusting check_azure_paas.py -> build/scripts-2.7
changing mode of build/scripts-2.7/check_azure_compute.py from 644 to 755
changing mode of build/scripts-2.7/check_azure_ad.py from 644 to 755
changing mode of build/scripts-2.7/check_azure_sql.py from 644 to 755
changing mode of build/scripts-2.7/check_azure_storage.py from 644 to 755
changing mode of build/scripts-2.7/check_azure_paas.py from 644 to 755
running install_lib
creating /usr/lib/python2.7/site-packages/azuremonitor
copying build/lib/azuremonitor/publishsettings.py -> /usr/lib/python2.7/site-packages/azuremonitor
copying build/lib/azuremonitor/__init__.py -> /usr/lib/python2.7/site-packages/azuremonitor
byte-compiling /usr/lib/python2.7/site-packages/azuremonitor/publishsettings.py to publishsettings.pyc
byte-compiling /usr/lib/python2.7/site-packages/azuremonitor/__init__.py to __init__.pyc
running install_scripts
copying build/scripts-2.7/check_azure_ad.py -> /usr/bin
copying build/scripts-2.7/check_azure_compute.py -> /usr/bin
copying build/scripts-2.7/check_azure_sql.py -> /usr/bin
copying build/scripts-2.7/check_azure_paas.py -> /usr/bin
copying build/scripts-2.7/check_azure_storage.py -> /usr/bin
changing mode of /usr/bin/check_azure_ad.py to 755
changing mode of /usr/bin/check_azure_compute.py to 755
changing mode of /usr/bin/check_azure_sql.py to 755
changing mode of /usr/bin/check_azure_paas.py to 755
changing mode of /usr/bin/check_azure_storage.py to 755
running install_egg_info
Writing /usr/lib/python2.7/site-packages/azuremonitor-0.1-py2.7.egg-info
```

5. Link the External script:
 ```
# ls -al /srv/docker/zabbix/zabbix-server/externalscripts/
total 8
drwxr-xr-x. 2 dlalonde dlalonde 4096 Aug 11 18:43 .
drwxr-xr-x. 7 root     root     4096 Aug 11 17:57 ..
lrwxrwxrwx. 1 root     root       26 Aug 11 18:43 check_azure_ad.py -> /usr/bin/check_azure_ad.py
lrwxrwxrwx. 1 root     root       31 Aug 11 18:43 check_azure_compute.py -> /usr/bin/check_azure_compute.py
lrwxrwxrwx. 1 root     root       28 Aug 11 18:43 check_azure_paas.py -> /usr/bin/check_azure_paas.py
lrwxrwxrwx. 1 root     root       27 Aug 11 18:43 check_azure_sql.py -> /usr/bin/check_azure_sql.py
lrwxrwxrwx. 1 root     root       31 Aug 11 18:43 check_azure_storage.py -> /usr/bin/check_azure_storage.py
```

6. Copy the publishsetting file to a secure place
```bash
# cp -v azure.publishsettings /srv/docker/zabbix/zabbix-server/conf/azure.publishsettings
# chown dlalonde:dlalonde /srv/docker/zabbix/zabbix-server/conf/azure.publishsettings

# docker exec -ti zabbix-server /bin/bash
[root@zabbix-server ~]# cd /usr/local/etc/
[root@zabbix-server etc]# chmod 640 azure.publishsettings
[root@zabbix-server etc]# chown root:zabbix azure.publishsettings
[root@zabbix-server etc]# ls -la azure.publishsettings
-rw-r-----. 1 root zabbix 3837 Aug 11 18:26 azure.publishsettings
```
 
