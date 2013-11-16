derjan.io
==========

Source code for derjan.io - based on Jekyll and Github pages

Get the sources
---------------

Clone the Git repository

```sh
git clone https://github.com/jehrhardt/jehrhardt.github.io.git
```

or download the
[source code](https://github.com/jehrhardt/jehrhardt.github.io/archive/master.zip).

Requirements
------------

To build the page local or develop the CSS and JavaScript, you need to
setup some tools.

[Jekyll](http://jekyllrb.com) is used to build the page or run it in
development mode. It is installed through
[Bundler](http://gembundler.com).

```sh
# Install Bundler
gem install bundler

# Install Jekyll and dependencies
bundle install
```

[Node.js](http://nodejs.org) and [NPM](https://npmjs.org) are used to
run Grunt and Bower for building CSS and JavaScript including
dependencies. You can simply install both through some
[package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).
To setup the dependencies run

```sh
# Install Grunt cli and bower global
npm install -g grunt-cli
npm install -g bower

# Install further packages
npm install

# Install dependencies through Bower
bower install
```

Run local
---------

Running the page local can simply be done through Jekyll.

```sh
# Preview page
bundle exec jekyll serve --watch

# Build page
bundle exec jekyll build
```

Build CSS and JavaScript
------------------------

After changing styles or JavaScript code, it can be build by running Grunt

```sh
grunt
```

License
-------

Copyright © 2011-2013 [Jan Ehrhardt](http://derjan.io).

All sources distributed under the
[MIT license](LICENSE.txt).

All content distributed under the
[Creative Commons Attribution 3.0 Unported License](https://creativecommons.org/licenses/by/3.0/).
