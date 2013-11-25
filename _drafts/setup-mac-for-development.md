---
layout: post
title: "Setup Mac OS X for development"
---

After setting up a Mac with Mac OS X Mavericks from scratch, it seems
to be a good point to write about the tools I install and use for my
daily work as a software developer. I hope, this might help developers
switching to Mac OS X as well as people being new to software
development to get the basic stuff on their machines.

Basic development tools
-----------------------

In the past I have used iTerm 2, but after some improvements in the
last years, I am using Apple's Terinal app again. It is good enough
for me (smile).

Apple comes with the Bash as the default Shell. That might be fine for
many users, but I prefer the much more comfortable ZSH, which is
already included by Mac OS X Mavericks.

```sh
chsh -s /bin/zsh
```

Its comfort comes from its felxibility, but it requires a lot of
configuration before you benefit from it. As a lazy guy I use an open
source configuration from the internet instead of doing it myself. It
is the famous OH MY ZSHELL!.

```sh
curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh
```

It is pretty easy to activate the plugins you need or do other
customization of OH MY ZSHELL! by modifying the .zshrc file. You can
find mine in a Gist.

{% gist jehrhardt/6724571 .zshrc %}

Apple also provides some basic tools like GCC, Git and
Subversion for Mac OS X, but they are not installed by default. In the
past it was necessary to install Apple's XCode IDE to get them on your
machine but nowadays there is a slim solution by just installing the
command line tools.

```sh
xcode-select --install
```

The most important reason to install the tools is Homebrew. Mac OS X
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
when a project or company still uses Subversion.

Ruby and RVM
------------

Mac OS X Mavericks comes with Ruby 2.0.0 build in, but it might be a
good idea to install further newer or older versions. My prefered
solution to this is RVM. Installation is easy and it can automatically
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

In Ruby projects I put a .ruby-version file with the version, the project requires.

{% gist jehrhardt/7639076 .ruby-version %}

RVM will automatically switch to the version configured in the file,
when you enter the project directory in your terminal. It will use
Apple's Ruby again, when leave the project.

Java
----

Apple no longer provides a Java runtime by default. Running the
command ```java``` from the terminal will install Java 6 as provided
by Apple, but for most developers Java 7 will be a better choice. The
easiest way to get Java 7 on your machine is installing
[Oracle's Package](http://www.oracle.com/technetwork/java/javase/downloads/index.html). To
make it work, it is requiered to set the ```JAVA_HOME``` variable in
.zshrc. This will also prevent the installation of Apple's Java 6.

```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home/
```

Some useful tools like Maven, Gradle, Ant, SBT or Leiningen can be
installed by Homebrew.

```sh
brew install maven
brew install gradle
brew install ant
brew install leiningen
brew install sbt
```

For most Java developers a JDK and one of these build tools is not
enough. They also need an IDE. I prefer IntelliJ IDEA as a Java
IDE. Even if you have set ```JAVA_HOME``` to Oracle's Java 7, IDEA
still requires Apple's Java 6 for some reasons. But that is no
problem, since IDEA will prompt you for installation after the first
start.

Node
----

Node.js is not included by Mac OS X Mavericks and there is no package
available from Apple, but it can be installed from Homebrew.

```sh
brew install node
```

This will also install NPM for installing JavaScript packages. Most of
these packages are project specific and will be declared in a
package.json file, but there are two JavaScript tools, I like to install globally.

```sh
npm install -g bower
npm install -g grunt-cli
```

It is required to bring them on the ```PATH``` in .zshrc. Otherwise
global NPM packages are not known in your Shell.

```
export PATH=$PATH:/usr/local/share/npm/bin
```

Emacs
-----

It is important to have a good text editor as a developer. My favorit
one is Emacs and it can be installed via Homebrew.

```sh
brew install emacs --cocoa
```

Emacs is similar to ZSH in being very flexible and thus very powerful
and comfortable, but it also needs a lot of configuration. I use Emacs
prelude as an existing configuration.

```sh
curl -L http://git.io/epre | sh
```

I have also some tiny customization of Emacs prelude and some modules I load by default.

{% gist jehrhardt/7276703 personal/derjan.el %}

{% gist jehrhardt/7639865 prelude-modules.el %}
