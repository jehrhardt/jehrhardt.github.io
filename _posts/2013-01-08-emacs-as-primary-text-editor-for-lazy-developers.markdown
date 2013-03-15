---
layout: post
title: "Emacs as primary text editor for lazy developers"
date: 2013-01-08 08:30
categories:
- Emacs
---

I use Emacs as my default text editor for years now. Similar to
[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) there is a simple setup
for Emacs.

{% highlight bash %}
brew install emacs --cocoa --use-git-head --HEAD
curl -L https://github.com/bbatsov/prelude/raw/master/utils/installer.sh | sh
{% endhighlight %}

On Mac OS X this will install the latest version of Emacs and
[Emacs Prelude](http://batsov.com/prelude/). Prelude is a ready to use
configuration for Emacs, that gives you all you need as a programmer.

Emacs will load its whole configuration, when you start it. This makes
startup very slow, especially when you use a lot of modes like in Prelude.
Speed up Emacs start time can be done by running it as daemon.

{% highlight bash %}
emacs --daemon
{% endhighlight %}

Now you can connect to the local Emacs server with the _emacsclient_ command:

{% highlight bash %}
emacsclient -t hello-world.txt # opens Emacs and the file in your terminal
emacsclient -c                 # opens Emacs in a seperate window
{% endhighlight %}

Give it a try and learn loving it!

### License

© 2013 Jan Ehrhardt - Licensed under the terms of
[CC-BY](http://creativecommons.org/licenses/by/3.0/).
