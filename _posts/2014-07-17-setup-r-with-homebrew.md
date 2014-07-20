---
layout: post
title: "Setup R with Homebrew on Mac OS X"
date: 2014-07-17 11:55
---

On 1st of September a new course about
[Data Analysis and Statistical Inference](https://www.coursera.org/course/statistics)
starts. The course uses [R](http://www.r-project.org/) - a system for
statistical computing.

Get it on Mac OS X
------------------

The easies way to get open source tools on Mac OS X is using
[Homebrew](http://brew.sh/). But there is an additional dependency for R, which
is not provided by Homebrew: [XQuartz](https://xquartz.macosforge.org/landing/).
Download and install the latest version, **restart** your Mac and then go on
with Homebrew and R.

```sh
brew tap homebrew/science
brew install r
```

This will also install required dependencies like
[Fortran](http://en.wikipedia.org/wiki/Fortran).

Faster with OpenBLAS
--------------------

[OpenBLAS](http://www.openblas.net) is library that should speed up calculations
in R, but Homebrew does not install it by default. To install R with OpenBLAS
bindings you can add the `--with-openblas` option.

```sh
brew install r --with-openblas
```

This will also install OpenBLAS itself through Homebrew.

Trouble with XQuartz?
---------------------

I had some trouble with installing R the first time. The reason was an older
version of XQuartz. I found
[the solution on Stackoverflow](http://stackoverflow.com/questions/20457290/installing-r-with-homebrew/20457381#20457381).
A simple `brew doctor` told me, I was running an outdated XQuartz version.

```sh
brew untap homebrew/science
brew tap homebrew/science
brew doctor
```

After installing the latest version and **restarting** my Mac, installing R
worked fine.

Does it work now?
-----------------

The quick check for success is starting R with the `R` command (upper case
matters). This should start R and you can type in some R code.

```r
x <- 4 + 5
x
```

It should print 9 😉.
