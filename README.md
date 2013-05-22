derjan.io
==========

Source code for derjan.io - based on Jekyll and Github pages

Run local
---------

If you want to try out this page on your local machine you should have installed
[bundler](http://gembundler.com). Bundler will set up your local environment by
installing all required dependencies in the same version Github pages uses.

```sh
# Install bundler
gem install bundler

# Clone the repository
git clone https://github.com/jehrhardt/jehrhardt.github.com.git
cd jehrhardt.github.com

# Install dependencies and start Jekyll server for local preview
bundle install
bundle exec jekyll serve --watch

# Build page like Github pages does
bundle exec jekyll
```

License
-------

Copyright © 2011-2013 [Jan Ehrhardt](http://derjan.io).

All sources distributed under the
[GNU Affero General Public License version 3](https://www.gnu.org/licenses/agpl.html).

All content distributed under the
[Creative Commons Attribution-ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-sa/3.0/).
