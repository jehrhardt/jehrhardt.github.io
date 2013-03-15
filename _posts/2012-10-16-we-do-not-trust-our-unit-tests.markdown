---
layout: post
title: "We do not trust our unit tests"
date: 2012-10-16 07:33
categories:
- TDD
---

There is a simple rule, why we write unit test or better why we
should. Unit tests give us the required trust to refactor our
code. Changing code is the reason, why we test it. But many developers
do not trust their unit tests. They expect a wrong kind of trust, that
unit test can not supply. Time to change how we think about quality
and changing code.

The missing trust in units
----------

The trust developers want is a large one. They want to trust their
application as a whole.  They want to know changing a line of code
breaks the application. There is a good reason for this. If you write
a method in a class that is used in many places everywhere in your
code and you change a line in this method, you can break many parts in
your software.

The solution is to do tests on the highest reasonable level. In the
best case this level is the UI of your software. But UI tests are also
the slowest solution. They require a lot of things. You should run
them on all supported platforms or browsers. You should run them with
a real database and all these other services, that will be involved in
your production environment. All these things must be done for just
changing one line of code. You only trust in this probably simple
change, when the whole application is set up and its UI still does
what it should.

As you might guess there is a better solution. Unit tests should run
very fast.  You should run them as part of your development process
many times in a hour. But they simply test a simple method or class.
How can we trust them? How can we prove the application will not be
broken by changing code?

Write testable code
----------

Many people try to tell us
[TDD](/blog/2012/08/31/dont-miss-to-write-good-unit-tests/) results in
testable code. But this is not true.  You first need to understand
what testable code really is. Testable code is written in a way, that
allows you to trust your unit tests. This includes testable code is
easy to test, but it means a lot more. Testable code is build of small
units with a well defined API. The API is defined by the unit tests
and the tests prove, the API works as expected.

A simple example. You have got a method, that is used all over your
code. It is invoked in hundreds of places. This might be good
sign. Your code is highly reusable. But having such a method means,
its API is used very frequently and changing the API has a big
potential to break your application. If you need to change this
method, try to keep its API stable. If you have good unit tests, you
can easily prove the stability.

A simple step to get code more testable is writting small classes
doing just a few things. Small classes are easier to test, but it is
also easier to keep there APIs stable. If classes have few
dependencies and small classes tend to have few dependencies, there
might be less potential side effects from other objects at
runtime. This will help you to make classes' APIs more stable.

If you write testable code, your code will become a big bunch of small
pieces each with a very stable API. If you make a change to your code,
it might affect just few places and hopefully it does not break your
internal APIs.

What about the need of API breaks?
----------

Stable APIs are a good idea and you should pursue them. But sometimes
breaks are unavoidable. How can we deal with them?

A breaking API affects the users of the API. If your API breaks and
thus your existing tests have been changed, you need to work on the
users of the class or method too. Check their unit tests and write new
tests, if required to prove the API changes in the changed class do
not break their API. If their API also has been broken, go on and work
on their users too. Do this until you reach the point, where an API
keeps stable.

Testable code helps to deal with this. Breaking a classes API in a
testable code base does not affect the whole code. Instead it affects
just few classes or methods. If an API break also breaks the APIs of
the code's users, the code base is not testable.

Improve quality
----------

We have seen, what kind of trust unit tests can supply to us. Although
this trust does not work very well, when your code is not testable
improving your code's quality writing testable code is a much better
way than doing all tests through the UI and let your code rot.

### License

© 2012 Jan Ehrhardt - Licensed under the terms of
[CC-BY](http://creativecommons.org/licenses/by/3.0/).
