---
title: "Multiple versions of Grails with Homebrew"
date: 2012-12-11 11:03
---

[Homebrew](http://mxcl.github.com/homebrew/) is a nice package manager
and you can install [Grails](http://grails.orghttp://grails.org/) via Homebrew,
too. Since each Grails project is bound to a specific version of the
framework, you will need different versions of Grails on your
machine. This is about handling multiple Grails versions with
Homebrew.

Before you can install another Grails version, you need to unlink the
`grails` command.

{% highlight sh %}
brew unlink grails
{% endhighlight %}

You can find the different versions of Grails available via Homebrew
with the `versions` command.

{% highlight sh %}
brew versions grails

2.0.0    git checkout f038344 Library/Formula/grails.rb
2.1.1    git checkout 1bcf5af Library/Formula/grails.rb
2.1.0    git checkout 0dcf6e7 Library/Formula/grails.rb
2.0.4    git checkout 624e065 Library/Formula/grails.rb
2.0.3    git checkout af73ab0 Library/Formula/grails.rb
2.0.2    git checkout 1015eda Library/Formula/grails.rb
2.0.1    git checkout 97e8e5a Library/Formula/grails.rb
1.3.7    git checkout 232acd0 Library/Formula/grails.rb
1.3.6    git checkout 99b3ce9 Library/Formula/grails.rb
1.3.5    git checkout 9ae2ee6 Library/Formula/grails.rb
1.3.4    git checkout 9f1d66f Library/Formula/grails.rb
1.3.3    git checkout 590ae42 Library/Formula/grails.rb
1.3.2    git checkout 83f1377 Library/Formula/grails.rb
1.3.1    git checkout 0005a71 Library/Formula/grails.rb
1.3.0    git checkout f257bf9 Library/Formula/grails.rb
1.2.2    git checkout 585ee08 Library/Formula/grails.rb
1.2.1    git checkout e4b66ce Library/Formula/grails.rb
{% endhighlight %}

Behind each version you can find a Git `checkout` command. You can run
the command for your version inside `/usr/local` and install Grails
again.

{% highlight sh %}
brew install grails
{% endhighlight %}

That's it! Repeat the above steps for each Grails version, you want to
use. To run Grails from your Terminal, you will need to link the
`grails` command against the version, you currently need. This can be
done with the `switch` command.

{% highlight sh %}
brew switch grails 2.0.0
{% endhighlight %}

When you are using an IDE, you can simply use the Grails libraries
installed via Homebrew. You can find them in
`/usr/local/Cellar/grails/${grails.version}/libexec/`.
