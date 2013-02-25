---
layout: post
title: "Emacs as default editor for Git"
date: 2012-10-27 12:17
status: publish
comments: true
categories:
- Emacs
- Git
---

By default Git uses vi on Mac OS X. Since I am using Emacs as my
favorite text editor, I want to use Emacs for editing my commit
messages in Git too. I had just to run the following command:

{% highlight bash %}
git config --global core.editor emacs
{% endhighlight %}

The problem is, this will point Git to the Emacs coming with Mac OS X,
which is a very old version. Since I am using Emacs 24 through
[Homebrew](http://mxcl.github.com/homebrew/), I had to run the
following command instead:

{% highlight bash %}
git config --global core.editor /usr/local/bin/emacs
{% endhighlight %}

Now when I am committing with _git commit_, Emacs will be opend in my
Terminal. I can edit the commit message and as in any other editor
too, I save (_C-x C-s_) the message and close (_C-x C-c_) the
editor. Is the commit message empty, the commit will be abort.
