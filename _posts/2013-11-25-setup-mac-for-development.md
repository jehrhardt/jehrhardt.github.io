---
layout: post
title: "Setup Mac OS X for development"
date: 2013-11-25 13:02
---

After setting up a Mac with Mac OS X Mavericks from scratch, it seems
to be a good point to write about the tools I install and use for my
daily work as a software developer. I hope, this might help developers
switching to Mac OS X as well as people being new to software
development to get the basic stuff on their machines.

Basic development tools
-----------------------

In the past I have used [iTerm 2](http://www.iterm2.com), but after some improvements in the
last years, I am using Apple's Terminal app again. It is good enough
for me 😉.

Apple comes with the [Bash](http://www.gnu.org/software/bash/) as the default Shell. That might be fine for
many users, but I prefer the much more comfortable [Zsh](http://www.zsh.org), which is
already included in Mac OS X Mavericks.

```sh
chsh -s /bin/zsh
```

Its comfort comes from its felxibility, but it requires a lot of
configuration before you benefit from it. As a lazy guy I use an open
source configuration from the internet instead of doing it myself. It
is the famous [OH MY ZSHELL!](https://github.com/robbyrussell/oh-my-zsh).

```sh
curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
```

It is pretty easy to activate the plugins you need or do other
customization of OH MY ZSHELL! by modifying the .zshrc file. You can
find mine in a [Gist](https://gist.github.com/jehrhardt/6724571).

Apple also provides some basic tools like [GCC](http://gcc.gnu.org), [Git](http://git-scm.com) and
[Subversion](http://subversion.apache.org) for Mac OS X, but they are not installed by default. In the
past it was necessary to install Apple's [XCode](https://itunes.apple.com/de/app/xcode/id497799835)
IDE to get them on your machine, but nowadays there is a slim solution by just installing the
command line tools 👍.

```sh
xcode-select --install
```

The most important reason to install the tools is [Homebrew 🍺](http://brew.sh). Mac OS X
has no package manager to install additional tools and Unix libraries
from the internet, but the open source community fixes this with
Homebrew. It is extremly easy to install.

```sh
ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"
```

By default tools from Homebrew will be installed to /usr/local and
thus overwrite the ones provided by Apple. This includes Git, which
comes in a newer version from Homebrew. While this version has colored
output when running ```git log```, its Subversion bindings are
broken. To fix it, I have an alias in my .zshrc.

```sh
alias git-svn="/usr/bin/git svn"
```

git-svn allows me use Git as the one and only versioning tool, even
when a project or company still uses Subversion 😜.

*Update:* Git Subversion integration has been fixed. So the alias is no longer required.

Ruby and RVM
------------

Mac OS X Mavericks comes with [Ruby](https://www.ruby-lang.org) 2.0.0 build in, but it might be a
good idea to install further versions. My prefered
solution to this is [RVM](http://rvm.io). Installation is easy and it can automatically
install packages from Homebrew, when required by a Ruby version.

```sh
curl -L https://get.rvm.io | bash -s stable --autolibs=homebrew
```

I use RVM only for developing Ruby code, but not for running Homebrew
and other Ruby based software. So I set the default Ruby to Apple's
build in version.

```sh
rvm --default use system
```

In Ruby projects I put a
[.ruby-version file](https://gist.github.com/jehrhardt/7639076) with
the version, the project requires. RVM will automatically switch to
the version configured in the file, when you enter the project
directory in your terminal. It will use Apple's Ruby again, when leave
the project.

Java
----

Apple no longer provides a Java runtime by default. Running the
command ```java``` from the terminal will install Java 6 as provided
by Apple, but for most developers Java 7 will be a better choice. The
easiest way to get Java 7 on your machine is installing
[Oracle's 👿 Package](http://www.oracle.com/technetwork/java/javase/downloads/index.html). To
make it work, it is requiered to set the ```JAVA_HOME``` variable in
.zshrc. This will also prevent the installation of Apple's Java 6.

```sh
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home/
```

Some useful tools like [Maven](http://maven.apache.org), [Gradle](http://www.gradle.org),
[SBT](http://www.scala-sbt.org) or [Leiningen](http://leiningen.org) can be
installed by Homebrew.

```sh
brew install maven
brew install gradle
brew install leiningen
brew install sbt
```

For most Java developers a JDK and one of these build tools is not
enough. They also need an IDE. I prefer [IntelliJ IDEA](http://www.jetbrains.com/idea/) as a Java
IDE. Even if you have set ```JAVA_HOME``` to Oracle's 👿 Java 7, IDEA 12
still requires Apple's Java 6 for [some reasons](http://blog.jetbrains.com/idea/2013/09/jdk7_compatibility/). But that is no
problem, since IDEA will prompt you for installation after the first
start.

Node
----

[Node.js](http://nodejs.org) is not included by Mac OS X Mavericks and there is no package
available from Apple, but it can be installed from Homebrew.

```sh
brew install node
```

This will also install [NPM](https://npmjs.org) for installing JavaScript packages. Most of
these packages are project specific and will be declared in a
package.json file, but there are two JavaScript tools, I like to install globally 🌏.

```sh
npm install -g bower
npm install -g grunt-cli
```

It is required to bring them on the ```PATH``` in .zshrc. Otherwise
global NPM packages are not known by your Shell.

```
export PATH=$PATH:/usr/local/share/npm/bin
```

Emacs
-----

It is important to have a good text editor 📝 as a developer. My favorit
one is [Emacs](http://www.gnu.org/software/emacs/) and it can be installed via Homebrew.

```sh
brew install emacs --cocoa
```

Emacs is similar to ZSH in being very flexible and thus very powerful
and comfortable, but it also needs a lot of configuration. I use [Emacs
prelude](https://github.com/bbatsov/prelude) as an existing configuration.

```sh
curl -L http://git.io/epre | sh
```

I have also some tiny customization of Emacs prelude in a
[Gist](https://gist.github.com/jehrhardt/7276703).

Ready
-----

That is all. I hope it might be helpful for someone. Choose the tools
you need from above and be productive! 🍺💃😊
