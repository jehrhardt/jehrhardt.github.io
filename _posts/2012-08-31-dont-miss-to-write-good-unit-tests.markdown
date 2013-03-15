---
layout: post
title: "Don't miss to write good unit tests"
date: 2012-08-31 10:46
categories:
- Clean Code
- TDD
---

It is not enough for today's software developers to know their
programming language well. There are further skills, that more and
more companies are expecting from there employees. One of the most
important is
[Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)
(TDD). This is not an introduction to TDD. If you want to learn it, I
recommend [Uncle Bob's](https://twitter.com/unclebobmartin) awesome
[Clean Code Videos](http://www.cleancoders.com/) (Episode 6 - TDD) or
simply [ask Google](https://www.google.com/search?q=tdd+tutorial) for
it. But many developers are writing bad code and applying TDD does not
make them writing good code. Instead it makes them also writing bad
tests. So this is about writing better test code.

Applying simple rules
----------

To understand why test code can be bad, you should understand, what it
should do. It should work as the parachute, that keeps you alive, when
refactoring your code. Tests may help you to be sure nothing breaks,
when adding new features to your code. But tests may also work as
sample code, that documents your APIs better than any other
documentaion except the code itself.

But how can you make your tests better? It might help to follow some
simple rules, that could be easily applied to every language or test
style like BDD or Junit-style.

Tests should be a state machine
----------

Many people do not like BDD at all, but there is a pretty nice idea in
it - the given-when-then style some frameworks promote. This style
forces you into a way of thinking about tests, that you should adapt.
Even if you do not use a BDD framework.

Writing a test this way means there is a start state, something
happens and than an end state is reached. If your test is broken, the
state machine in it is broken. In BDD frameworks the first part of
your test is the _given_ block, where all the setup stuff is done. The
second part is the _when_ block, where an action is applied on the
test object, created in the given block. At least you have a _then_
block, where you assert, that the correct end state is reached.

It is very helpful to have this in mind while writing a new test. Keep
these three parts seperated and do not mix them in some way. Do not
write code in your test, where an _if_ appears, or even more complex
logic. In a test you should only do the above three steps. Do some
simple setup, call a method on your test object or invoke the test
function and assert the result is correct.

This might also make your code better. If you write messy code, tests
written this way are harder to create and maintain. If you have to
much of inheritance, dependencies on other objects or resources like
IO, you will have to set it up in every test you write and that is no
fun. But you should write your tests first and hopefully it makes
writing messy code harder, if you have written a well structured tests
first.

Tests should be good examples for using your API
----------

Every code you write has an API. If your application has a graphical
user interface or it is an open source library, there is some way it
is used by others. If some other developer is changing your code, or
working with you in the same team, there is an API for each class or
function in the whole code. You can write documentation like JavaDoc
on every public method, but this tends to be out of date, since many
developers miss to update it when they change the code.

A better way of technical documentation for source code are code
snippets, that show how to use a class or function. But many
developers do not have this in mind, while writing tests. That is sad,
because tests use your code and should be executed frequently. So they
are already working code samples.

Before you write a test, you should first think about how someone
wants to use your code. How should your methods be named? What
parameters do users want to pass to it? What do they expect as a
result? The next step might be writing a test, that simply shows, how
a user would call your code. Does it look well? Is it simple or
complex? Could it even look simpler? Once your test defines the API,
write the code to make it green.

If you have done your job well, someone looks to your tests and
understands how to use your code. This documentation does not outdate
as long as all tests are executed frequently. If it outdates, it will
hopefully break your build.

Tests should have meaningful assertions
----------

Do you write debug logging statements in your code? Why are you doing
it?

Most developers want to know, why their code fails and this is, where
debug logging comes in. If you write good tests for your code, you
should know, that your code behaves as it should, because it is
verified by the tests. So there is no need for debug logging
anymore. But what happens, if you change some code and break some
other code by this change? In the best case some test will fail, but
you do not know why.

This is where assertion come in. You should spend some time in
learning how assertions in your test framework realy work. You should
figure out, if there are open source libraries, that could improve
assertions in your tests, like
[fest](https://github.com/alexruiz/fest-assert-2.x/wiki) does in the
Junit or [Spock](http://spockframework.org) does for Java at all.

The most important work assertions should do is telling you why a test
has failed. In the best case it prints the expected value and the
actual value and shows you how they differ. This might help you to
figure out, what is wrong with your code. And might do this much
better than any debug logging.

Reaching the next level of TDD
----------

As you can see, it is not enough to learn how to do TDD. You should
also learn how to write good tests. The above rules are not simple to
apply, but might improve your test code's quality. At all they may
help you reaching the next level of TDD and the next level of writing
source code. You should start to apply them as soon as possible to
make your test code much cleaner.

There are a lot more good techniques to improve TDD. Tell me about
them in the comments.

### License

© 2012 Jan Ehrhardt - Licensed under the terms of
[CC-BY](http://creativecommons.org/licenses/by/3.0/).
