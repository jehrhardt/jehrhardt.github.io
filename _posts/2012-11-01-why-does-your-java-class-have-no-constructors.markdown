---
layout: post
title: "Why does your Java class have no constructors?"
staus: publish
date: 2012-11-01 08:28
comments: true
categories: 
- Java
- Clean Code
- API Design
---

In Java land almost everyone is using frameworks like
[Spring](http://www.springsource.org) or
[Guice](https://code.google.com/p/google-guice/) to do
[Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection).
Sadly these frameworks are able to deal with code like this:

```java
public class HelloWorld {
  @Inject
  private GreetingProvider greetingProvider;
}
```

These frameworks use the power of Java's reflection API to set a
private variable to a value at runtime without a constructor or a
setter method. Since this reduces the number of lines, many developers
are using this feature frequently. So what is wrong with this?

First it makes you addicted to some framework or library. You cannot
run this code without a framework handling the dependency. Even your
unit test requires something do deal with this. This is **no** valid
Java code!

The second point is, it results in very bad API design. Like it or
not, each class you are writing has an external API and you should
always care about the design of this API. In the above case nobody
knows about your API, because it is hidden. The real API includes a
dependency to a Dependency Injection framework, but this fact is not
made explicit in the API. People are telling me, that they do not like
dynamic languages, since there are no declared types in the method
signature. But then the same people are writing code like above.

But how can we do better?

There is only one way, you should do Dependency Injection. Use a
constructor! This results in code like this:

```java
public class HelloWorld {
  private final GreetingProvider greetingProvider;

  @Inject
  public HelloWorld(GreetingProvider greetingProvider) {
    this.greetingProvider = greetingProvider;
  }
}
```

But if you think there is to much code, learn and use another laguage!
The same in Scala:

```scala
class HelloWorld(greetingProvider: GreetingProvider) {}
```
