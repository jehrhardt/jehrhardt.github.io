---
layout: post
title: "Git as SVN client with multiple branches"
status: publish
date: 2012-10-25 10:45
comments: true
categories: 
- Git
- SVN
---

If you are forced to use SVN, you can still use Git. Git is a great
[SVN client](http://blog.tfnico.com/search/label/git-svn). When your
SVN repository has multiple branches and you must work on them, Git
can also handle this.

First you must define a new SVN remote in your Git repository. When
you look into the file _.git/config_, you will find the following:

```
[svn-remote "svn"]
        url = svn+ssh://my-svn-repo
        fetch = :refs/remotes/git-svn
```

This is the definition of the default SVN remote created by _git svn
clone svn+ssh://my-svn-repo_. You can simply add the following bellow
this default remote.

```
[svn-remote "svn-second-branch"]
        url = svn+ssh://my-second-svn-branch
        fetch = :refs/remotes/git-svn-second-branch
```

This adds a new SVN remote named _svn-second-branch_ once you have
fetched it with _git svn fetch svn-second-branch_, it will be
available in Git with the name _git-svn-second-branch_.

If you want to ckeck it out, run _git checkout git-svn-second-branch
-b my-local-branch_.
