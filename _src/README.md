This directory contains JavaScript and Less code for http://derjan.io.

Requirements
------------

The assets for http://derjan.io are build by Grunt. First install
[Node.js](http://nodejs.org) and [NPM](https://npmjs.org). You can simply
install both through some
[package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
for your system.

Then install the tools and dependencies. First the the Grunt command line
interface and bower globally through NPM.

```sh
npm install -g grunt-cli bower
```

Install NPM dependencies.

```sh
npm install
```

Install Bower dependencies.

```sh
bower install
```

Usage
-----

Build all assets and install them to `../assets` directory by using Grunt.

```sh
grunt
```

Assets are also committed to Git and copied by Jekyll to the page. The source
code in this directory is not published to the page.

License
-------

Copyright © 2011-2014 [Jan Ehrhardt](http://derjan.io).

All sources in this directory distributed under the
[MIT license](LICENSE).
