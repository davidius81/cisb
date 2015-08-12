

# Manage Puppet configuration with git.



Populate my current Puppet Environment structure in my private gitlab reposiroty:


1. Check out my repo from gitlab

```
[root@cosneuqapm01 ~]# mkdir git
[root@cosneuqapm01 ~]# cd git/
[root@cosneuqapm01 git]#  git clone http://cosneuqanode03:10080/tooling2dot0/csib-prod.git
Cloning into 'csib-prod'...
Username for 'http://cosneuqanode03:10080': david.lalonde
Password for 'http://david.lalonde@cosneuqanode03:10080':
remote: Counting objects: 9, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 9 (delta 0), reused 0 (delta 0)
Unpacking objects: 100% (9/9), done.

[root@cosneuqapm01 git]# cd csib-prod/
[root@cosneuqapm01 git]# cd csib-prod/
[root@cosneuqapm01 csib-prod]#  git branch
*master
```

2. Copy my document to my repo using rsync:
```
[root@cosneuqapm01 csib-prod]#  rsync -avP /etc/puppetlabs/code/environments .
```

3. Commit my change:
```
[root@cosneuqapm01 csib-prod]# git add environments
[root@cosneuqapm01 csib-prod]# git commit -m "adding environment to Puppet repo"
```

4.Push my commit in my new repo:
```
[root@cosneuqapm01 csib-prod]#  git push

Username for 'http://cosneuqanode03:10080': david.lalonde
Password for 'http://david.lalonde@cosneuqanode03:10080':
Counting objects: 927, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (811/811), done.
Writing objects: 100% (926/926), 399.61 KiB | 0 bytes/s, done.
Total 926 (delta 207), reused 0 (delta 0)
To http://cosneuqanode03:10080/tooling2dot0/csib-prod.git
   f078398..9f8e865  master -> master
```

5.  Verify the status of my git
```
[root@cosneuqapm01 csib-prod]# git status
# On branch master
nothing to commit, working directory clean
[root@cosneuqapm01 csib-prod]# git branch
* master
[root@cosneuqapm01 csib-prod]# git log
commit 9f8e86543ef9b5533353ae8f433d6183c3402138
Author: root <root@cosneuqapm01.cosneumgmtcs01.b6.internal.cloudapp.net>
Date:   Wed Aug 12 14:15:52 2015 +0000

    adding environment to Puppet repo

commit f078398318e5e0300861a04bcf294e32839f85cc
Author: Administrator <admin@example.com>
Date:   Mon Aug 10 20:45:37 2015 +0000

    Add files

commit 84e69d364b2ff75ebddf527c148026f026d2b25b
Author: Administrator <admin@example.com>
Date:   Mon Aug 10 20:45:03 2015 +0000

    Add new file

commit a8b0c0d93a8dcea153999f3bf0b059a827efca91
Author: Administrator <admin@example.com>
Date:   Mon Aug 10 20:25:25 2015 +0000

    Adding new files
