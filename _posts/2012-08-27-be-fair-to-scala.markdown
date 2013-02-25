---
layout: post
title: "Be fair to Scala, do not expect a better Java"
status: publish
date: 2012-08-27 12:43
comments: true
categories:
- Scala
---

To some Java developers Scala has become an alternative to Java as a
programming language. So they started learning it and do the first
steps in writing some Scala code. To most of them the next step might
be the first contact with a Scala library and hopefully a Scala test
framework. But right after the first contact, I here them
screaming. Oh my god, this library uses all the tricky features Scala
comes with. Do the developers not care about readability?

Some lines of Scala code
----------

What is the problem in Scala? To understand it, lets take a brief look
to some Scala code.

{% highlight scala %}
object Application extends App with PathConversion with StringConversion {
  Files.write("log", "Hello world\n", APPEND)
}
{% endhighlight %}

This code appends a line to a file. It uses the
[new file API](http://docs.oracle.com/javase/7/docs/api/java/nio/file/package-summary.html)
introduced in Java 7 to do this.

The
[write](http://docs.oracle.com/javase/7/docs/api/java/nio/file/Files.html#write\(java.nio.file.Path,
byte[], java.nio.file.OpenOption...\)) method only accepts a
[Path](http://docs.oracle.com/javase/7/docs/api/java/nio/file/Path.html)
object and a byte[] as parameters. The trick is done in the traits
_StringConversion_ and _PathConversion_, which provide implicit
methods to convert Strings.

{% highlight scala %}
trait StringConversion {
  implicit def bytes(text: String) = text.getBytes(Charsets.UTF_8)
}

trait PathConversion {
  implicit def stringAsPath(path: String) = Paths.get(path)
}
{% endhighlight %}

The methods in the traits are called implicit, thus the compiler will
create byte code, that calls these methods. But these calls are not
written expilcitly in the code.

What Java developers do not like
----------

The above code snippets are using a nice features, that Scala provides
and that Java does not. But when Java developers start using Scala,
they often look at it as a better Java and thus they expect to use
their existing skills.

One problem are the implicit calls to methods. In the Java world
static typing is not just used for type checking at compile time. It
is also used as an implicit type documentation. So a Java developer
would look at the signature of the write method and see that it only
accepts objects of type Path and byte[] as parameters. But a look to
the method call shows, that Strings are passed to it.

From a Java developer's point of view, this is not easy to understand.
Where is this implicit conversion of types done? A Java developer
might think, this reduces readability. But this is not true.

It is not Scala's fault
----------

Scala is not a better Java. It is a completely different language. As
any other language too, Scala also has a community around it. There
are libraries and APIs designed for Scala and they are using the
features of the language. This is exactly how it should be.

The way a developer works with Java is not the way a developer works
with Ruby or Python or even JavaScript. Many Ruby developers use a
text editor instead of a fat IDE, while Java without any IDE is really
painful. Using the declared types of method parameters to figure out,
what you can pass into this method is also a Java way of working. In
Ruby, Python or JavaScript, there are no declared types. There is even
no type checking at compile time. But people know how to use methods
and classes in these languages as well.

Scala's type system is very powerful, while Java's is not. It allows
you to do things like the above and it is good, when Scala developers
are using these features in their code and APIs. But the power of
Scala's type system makes it also complex. The compiler can check the
types, while the developer may not understand them easily from the
method signature.

Learn to work the Scala way
----------

There is only one solution to this problem. Java developers must learn
how to work with a language, that has a type system different from
Java's. They have to change their mind and extend their skills.

Well, if you do not get comfortable with this, Scala is not your
language. Take your hands off and go home to your Java code.

What do you think? How do you solve the parameter documentation in
your favorite programming language? And how do you figure out how to
use a method?
