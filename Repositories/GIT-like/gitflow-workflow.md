
*source:http://nvie.com/posts/a-successful-git-branching-model/*
# GitFlow Workflow



### The branching strategy and release management.

The main branches are:
* Feature branches
* Release branches 
* Hotfixes branches

**Features branches**
The active development will be in these branches, developper can work on the same feature branch prior to promote it to the next level.

**Release branches**

These branches are there to prepare the production release. Only small change are allowed.

**HotFixes**

These branches are only to fix a bug from the productions.


###Brief Workflow

1. Code are checkout from Master Branch to create a feature branch.
2. Developer are working on this new feature branch.
3. When ready, the code will be commit to the release branch.
4. Release branch will be promoted to the master and tagged with the release number.
5. Hotfixes will be checkout from Master and release to master/tag directly

###Namming convention

release-*


Creating the branches


- Master (Tag = 1.1)  > Feature branch > develop > release >  master (Tag 1.2 )
- Master > hotfixes > Master  (Tag = 1.2.1)


Release branch
```
$ git checkout -b release-1.2 develop
Switched to a new branch "release-1.2"
$ ./bump-version.sh 1.2
Files modified successfully, version bumped to 1.2.
$ git commit -a -m "Bumped version number to 1.2"
[release-1.2 74d9424] Bumped version number to 1.2
1 files changed, 1 insertions(+), 1 deletions(-)
```


