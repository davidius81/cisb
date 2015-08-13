
### Distributed revision control and source code management (SCM)



#### Git-like products to evaluate:


* Bitbucket
* gitosis
* gitolite
* gitlab
* rhodecode.com
* github
* gitlist.org
* gitlit.com
* gitweb
* stash


####Git Workflow

**General Git Workflow**

Git workflow is well describe in [here](https://www.atlassian.com/git/tutorials/comparing-workflows/centralized-workflow)

**Release/Branches WorkFlow**

The [Gitflow Workflow](http://nvie.com/posts/a-successful-git-branching-model/) section below is derived from Vincent Driessen at [nvie](http://nvie.com)

### Compare GIT products

* GitLab VS GitoLite (https://blog.jalada.co.uk/gitlab-vs-gitolite/)
### Architecture



####  Using githook


![alt text](https://d1cg27r99kkbpq.cloudfront.net/static/extra/33-git-to-puppet-deployment-workflow.png "Git WorkFlow")


*Source:(https://sysadmincasts.com/episodes/33-git-to-puppet-deployment-workflow)*

* gitweb
* gitolite for autho
* 3 githook
  * Git Pre-commit hook 
     Check each commit and allow only the commit with a valid Puppet syntax and reject the bad syntax.
  * Git Post-receive hook
    * Email hook 
      Grab the commit details and send it to the ops and dev staff along with dashboard gitweb links easy view the details.
  *   Sync hook 
      Use rsync to sync the repo to Puppet codes


  
