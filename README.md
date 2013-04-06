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
bundle exec jekyll --server --auto

# Build page like Github pages does
bundle exec jekyll --pygments --no-lsi --safe
```

License
----------

Copyright © 2013 Jan Ehrhardt

All source code is distributed under the terms of the
[MIT license](https://github.com/jehrhardt/jehrhardt.github.com/blob/master/LICENSE.txt).

All content under ```_posts``` is published under
[Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/).
