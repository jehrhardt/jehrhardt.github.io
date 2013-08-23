---
layout: post
title: "Applying the test automation pyramid to the real world"
date: 2012-09-11 7:47
categories:
- TDD
- Best Practices
- Agile Development
---

You probaply heard of the test automation pyramid, which is a great
idea to make automated testing work in an agile development
environment. [Martin Fowler](https://twitter.com/martinfowler)
[explains the pyramid](http://martinfowler.com/bliki/TestPyramid.html)
pretty well on his blog.

The pyramid has three layers UI, Service and Unit tests. Theses layers
map well to standard web applications.  But in more complex systems
this simple model does not fit exactly at first view. But that is not
true. It fits perfectly, if you understand it right.

### What is wrong with the real world?

The test automation pyramid is created with web applications in
mind. Think of a simple monolithic LAMP or Rails application. All the
code is on the same server. In this case the idea of the pyramid fits
perfectly, since we have an UI and a monolithic application.

In the real world, the situation differs a lot. Many applications do
not have an UI at all. They might be so called backend services, which
provide some logic, that works somewhere in the backround. The UI part
of the software system is is probably written in a language like
[Ruby](http://www.ruby-lang.org), while the backend services - maybe
written in [Java](http://openjdk.java.net),
[Scala](http://www.scala-lang.org) or [Clojure](http://clojure.org) -
are accessed through HTTP. But how do you apply the pyramid?

### What is wrong with the pyramid?

The problem comes from the miss leading names of the layers in the
pyramid. E. g. the top layer is called UI tests and our backend
application has no UI. Sure there is hopefully an UI application, that
access our backend service and has UI tests, but is that enough?

The solution is a simple renaming of the layers. Let us call the top
layer _function tests_ instead of UI tests. This name also applies well
to non GUI applications. The tests in this layer should be very
similar to UI tests.

### Testing an application works

The _functional test_ layer on top should prove the application
works. This means, you have at least to start your application
and access it through some mechanism similar to your production
environment. In the best case your application will be deployed to a
real server with a real database. Everything like authentication or
access over the network should happen in a function test the same way
it does in a production environment.

While the infrastructural requirements for theses tests are high and
the tests itself might run very slow, there should be only few test
cases in this category. You should not test failures here or some edge
cases. Simply make sure your application is deployed, can access the
database and answers as expected to some requests.

This kind of definition works for backend applications as well as for
UI applications. UI tests are just a special form of functional
tests. If you have both an UI application with UI tests and a backend
service, your UI tests should run end to end, which also includes your
backend services. In addition your backend service can also have its
own functional tests, doing some basic HTTP requests. So you end up
with functional tests on different layers of your system.

An important point is to know, that developers might not run theses
test very frequently on their own local machines. But this is ok as
long as some continous integration server will run them regularly.

### Testing your application behaves correctly

When _functional tests_ do not test the correct behaviour of your
application, you need another layer to this. In the test pyramid the
_service test_ layer does this job.

Different to functional tests developers should run service tests very
frequently. Thus the tests must execute fast enough to do
this. Starting a Java EE application server might be much to slow for
this. So service tests should skip this. Instead they should be
written similar to unit tests, using a tool like Junit and
instantiating objects from your code.

But what should be tested exactly? A good service test runs a
typical scenario, that might appear similar in production. So take a
typical conversation with your application and write it down in your
test case. You should make sure, you focus on positive tests and skip
error handling and edge cases at this level.

Service tests should make sure, the parts of your code work together
as expected and behave like they should. This includes integration
with third party libraries and even persistence. But always keep it
simple. Use a simple database like [SQLite](http://www.sqlite.org) or
[H2](http://www.h2database.com) instead of a full blown database
server. Use simple HTTP mocks with static JSON files instead of real
services in the backend. Keep your infrastructure as lean as possible
to make running the tests easy.

### Testing your code

A _unit test_ should be executable as fast as possible. If some
framework needs some seconds to initialize, skip it in the unit
tests. Make your tests as fast as possible. There is a simple reason
for this performance requirement. Developers should not run unit tests
just frequently, they should run them as often as possible. You
changed a line of code? Run the tests! This is how it should work and
thus performance matters a lot.

Since unit tests should be very fast, it is cheap to run them, but it
is also cheap to test edge cases and failure handling in unit
tests. If your application should be able to deal with null values,
unit tests are the place to prove it. If your application should
validate some data, unit tests are the place to prove it. If your
application should apply an algorithm, unit tests are the place to
prove it.

Unit tests can do
[much more](/blog/2012/08/31/dont-miss-to-write-good-unit-tests/). They
can help other developers to understand your code and its behaviour
better. They can help you to change your code, without fearing to
break it. And they can help you to find errors in the code, when they
fail.

### When should your tests run?

Unit tests can be found near the production code. In multi module
projects, each module will have its unit tests. Most tools like Maven
or Gradle in the Java world or Rake in the Ruby world will run the
unit test by default, so there should be no probem for your continous
integration server. Java IDEs have also integration for common test
frameworks.

Little harder is to run service tests. They might be much slower than
unit tests, so there should not be so much test cases to
run. Important is, that a standard build like _gradle build_ or _mvn
clean package_ will run theses tests. After all modules have been
compiled, all unit tests should be executed. Now it is time to run the
integration tests. They prove, the standard interaction with your
software works well. Integration tests can be placed in a separate
module to make this work best. But at least keep them separated from
your unit tests to reduce problems.

The hardest part are the functional tests. Since their primary goal is
to prove, the software runs and works as expected, there is no reason
to execute them all the time as part of the standard build. Instead
you should make theses tests easily executable without building the
whole software. It is great, when a continous integration server
deploys the software on a test machine with a real database, real HTTP
and real authentication and than runs the functional tests against
this system.

### Other ways

Sure this is one solution to the problem and you may have found
another way to work with different test levels. What do you think?
How did you solve this? What worked great? What was bad? Leave me a
comment.
