---
layout: post
title: "Choosing a programming language is hard"
date: 2013-07-07 08:08
published: false
---

In the last weeks I have seen many people complaining about the speed of the
Scala compiler. Some were even
[writing about it](http://grundlefleck.github.io/2013/06/23/using-scala-will-make-you-less-productive.html).
The problem with Scala is pretty similar to the problem with Java, which has a
much faster compiler, but you can not write good code in Java. This is an
interesting fact, that becomes more interesting when comparing more
programming languages.

The above triangle shows three properties, that are important for the practical
use of a programming language.

### Code to run speed

In most cases it does not matter how fast your code could be executed at
runtime. More important is how fast you get from writing a line of code to
executing a the unit test, that should become green. This is where Scala's
compiler comes in. Since compilation is slow, It takes a lot of time to execute
your unit test. At the moment Scala is only language I know, that has such a
performance, when it comes to this point.

### Expressiveness

It is more important, that code can be read than be written.
