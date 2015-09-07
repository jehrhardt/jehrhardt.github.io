---
title: "Discovery of Java Land"
date: 2012-10-06 19:16
---

I am developing Java code for many years now and know how to do this. But some years ago, I started to look what else happens in the programming world. I figured out, that other developers are not just using other programming languages, they are also using other tools and come with another mindset. While I learned a lot about how others do their work, I found more Java developers looking outside the Java world in the last months and they were wondering what happens there. But why is the the Java world culturally so isolated, that even experienced developers struggle with the tools everyone else uses?

## Meeting the clash
Over the last few years I have done a few or even more steps with different languages. I have taken a look to [Python](http://www.python.org), which was disillusioning. The language was so unfancy and old, but of cause still useful. I did some steps with [Ruby](http://www.ruby-lang.org), which was pretty interessting. I played around with [node.js](http://nodejs.org) and [JavaScript](https://en.wikipedia.org/wiki/JavaScript). And of cause I did some [Scala](http://www.scala-lang.org) and [Groovy](http://groovy.codehaus.org). But my personal favorite is [Clojure](http://clojure.org/). I learned programming with [Scheme](https://en.wikipedia.org/wiki/Scheme_\(programming_language\)) and thus using a [Lisp](https://en.wikipedia.org/wiki/Lisp_programming_language) on the [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) could not feel more natural to me.

But Clojure looks more interessting, when you see the people using it. They are not just Java programmers. They are coming from different languages and cultures. I see Ruby and Python developers hacking Clojure as well as Java developers and even old Lisp fans. But this brings together two programming cultures, that could not be more different.

## IDE vs text editor
Java is not fun with all this boiler plate code. To make such a language usable, you will need a good tool. Not a good text editor, a really heavy tool, that does so much more. I am sure, I would not write Java code, if I had not a powerful [IDE](http://www.jetbrains.com/idea/).

But as I have written my first lines of Ruby some years ago, I figured out, that programming in a text editor could work pretty well. I do not know how many Ruby or Python developers use an IDE, but none I personally know. I know many of them using vi or [vim](http://www.vim.org) and some using [Emacs](http://www.gnu.org/software/emacs/) like [me](https://github.com/jehrhardt/prelude). But none of them is using an IDE.

Since I know how useful IDEs are for coding Java, I also know how useless they are for coding Ruby or of cause Clojure. To me my Emacs is the perfect tool to writting Clojure code. A brief look to the Clojure community shows, I am not alone with this. But a brief talk to some Java developer shows, how much he is tied to his IDE.

Some might simply be not comfortable with a text editor, which is ok. But some even do not understand, that there are languages, that are more usable than Java and thus create no need for an IDE.

## IDE vs Terminal
Some years ago as I first tried a new build tool for Java projects called [Gradle](http://gradle.org), it was not possible to get the tool into real projects. There was a simple reason: the IDE!

Gradle had a bad IDE integration and thus there was no way to use it. Gradle was cool and did some nice things, but it did not work well with the IDE.

In the Ruby world I did not find somthing similar. New tools are tried out by others very quickly, since everone uses a [terminal](https://en.wikipedia.org/wiki/Terminal_emulator). And tools are provided mostly with a termial interfaces. It looks like the Clojure community is more like the Ruby community than the Java community. Most projects use [Leinigen](http://leiningen.org) instead of [Maven](https://maven.apache.org), which also allows to do Clojure. Many already use Leinigen 2, which has not been released yet.

I know Java developers, who execute Maven goals with a mouse click from their IDE and not from the Terminal. They do not use a library for unit testing, that is not supported by their IDE. They do nothing, without their IDE.

The companies making money with Java tools have done a very good Job. They have created a generation of developers that do not know how to use a powerful command line tool. They have made all the quirky stuff in the Java world useable by hiding the command line instead of creating better tools. The Java developers are now addicted.

## Static vs dynamic typing
There is this one big argument, a Java developer will have, why he still believes in Java: static typing. Java's static type system is not very powerful. It is not very flexible. It is a pain. But to a Java developer it is the core feature, since there are no others.

Static typing allows the Java IDEs to provide a lot of information. IDEs show you what a method returns and what methods could be invoked on the result. Beside this results in massive violations of the [Law of Demeter](https://en.wikipedia.org/wiki/Law_of_Demeter), it is just another reason, why Java developers are addicted to their IDEs. They simply do not know how to learn somthing about an API without seeing the invokable methods in the IDE.

A good library comes with a good documentation and with examples. In the best case there are a lot of tests, that provide you the best sample code to learn how to use the library. You can also clone the repository and take a look to the code. On the other hand libraries without good documentation are hard to use and thus people do not use them. This is how to become comfortable with a new library. You must understand what it does and how to use it.

Most languages also provide a console or interactive mode. In Clojure or other Lisps it is called [REPL](http://clojure.org/getting_started). This is a great way to figure out how to use an API. You simply try it. But in the Java world, there is nothing similar, so developers cannot work without the information from the IDE.

This might be the hardest point to understand for a Java developer. You can be very productive, without an IDE that shows you what methods you can invoke on an object. You can simply know it, read it or try things out.

## The discovery has started
The world could be fine with IDE addicted Java developers isolated from the innovative rest. But with Clojure the game has changed. Clojure seems to be the gate for developers from other programming languages to the Java world. More than [JRuby](http://jruby.org) it opens the JVM for people, who do not need an IDE.

But Java developers must not struggle. They can do Clojure with Maven and some IDE plugin to learn the language. That might be the red pill!
