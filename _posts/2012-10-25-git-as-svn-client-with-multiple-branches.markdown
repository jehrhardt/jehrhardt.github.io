---
layout: post
title: "Git as SVN client with multiple branches"
date: 2012-10-25 10:45
categories:
- Git
- SVN
---

If you are forced to use SVN, you can still use Git. Git is a great
[SVN client](http://blog.tfnico.com/search/label/git-svn). When your
SVN repository has multiple branches and you must work on them, Git
can also handle this.

First you must define a new SVN remote in your Git repository. When
you look into the file ```.git/config```, you will find the following:

```sh
[svn-remote "svn"]
        url = svn+ssh://my-svn-repo
        fetch = :refs/remotes/git-svn
```

This is the definition of the default SVN remote created by ```git svn
clone svn+ssh://my-svn-repo```. You can simply add the following bellow
this default remote.

```sh
[svn-remote "svn-second-branch"]
        url = svn+ssh://my-second-svn-branch
        fetch = :refs/remotes/git-svn-second-branch
```

This adds a new SVN remote named ```svn-second-branch``` once you have
fetched it with ```git svn fetch svn-second-branch```, it will be
available in Git with the name ```git-svn-second-branch```.

If you want to ckeck it out, run ```git checkout git-svn-second-branch
-b my-local-branch```.

### License

© 2012 Jan Ehrhardt - Licensed under the terms of
[CC-BY](http://creativecommons.org/licenses/by/3.0/).
