---
title: "First steps with Groovy's invokedynamic support"
date: 2012-08-08 07:29
---

It is not really new, but [Groovy 2.0 is out](http://docs.codehaus.org/display/GROOVY/2012/06/28/Groovy+2.0+released). There is even a version [2.0.1 released](http://docs.codehaus.org/display/GROOVY/2012/06/28/Groovy+2.0+released), which only fixes some bugs. One of the new features introduced with version 2.0 is support for invokedynamic. But it is not used by default, instead you have to activate it. But there is only few documentation and it is spread over the web. So how do we use invokedynamic in our code?

## Get your machine ready
First of all you should have installed [Java 7](http://www.oracle.com/technetwork/java/javase/downloads/index.html), since invokedynamic is not available in earlier versions of Java. The easiest way to test invokedynamic support is by using the command line, so should also have installed [Groovy 2.0](http://groovy.codehaus.org/Download) or later.

Having Groovy installed you could simply use it with the `groovy` command in your terminal, but a different way, you should be familiar with is to compile Groovy code with `groovyc` to Java byte code. The byte code can be executed with `java -classpath`.

```sh
wget -O HelloWorld.groovy https://raw.github.com/gist/3292829/f9d2a37c6cdc45570aab1bf0ce665262899a0dde/HelloWorld.java
groovyc HelloWorld.groovy
java -classpath .:$GROOVY_HOME/embeddable/groovy-all-2.0.1.jar HelloWorld
```

These steps are pretty similar to my [first steps with Java](https://gist.github.com/3292829) years ago and they are necessary to do your first steps with invokedynamic. But at this time there is no invokedynamic involved.

## Two steps to use invokedynamic
The first step on our way to invokedynamic is using the right Groovy JAR, while executing our byte code. In `$GROOVY\_HOME/embeddable/` you can find `groovy-all-2.0.1-indy.jar`, where indy is short for invokedynamic. This JAR contains a version of Groovy, that uses invokedynamic instead of Groovy's very own old dynamic invoking code.

Using the indy JAR is not enough, since everything should still work under Java 5 or 6, even this JAR is used. The byte code created by Groovy compiler is not using any Java 7 features. So the second step is to tell the `groovyc` command to compile our Groovy code using invokedynamic by adding the `--indy` flag. The above sample should now look like this:

```sh
wget -O HelloWorld.groovy https://raw.github.com/gist/3292829/f9d2a37c6cdc45570aab1bf0ce665262899a0dde/HelloWorld.java
groovyc --indy HelloWorld.groovy
java -classpath .:$GROOVY_HOME/embeddable/groovy-all-2.0.1-indy.jar HelloWorld
```

## Make your Groovy 2.0 indy
Running the above code will fail at second command with a curious exception:

```sh
groovy.lang.GroovyRuntimeException: Cannot use invokedynamic, indy module was excluded from this build.
```

What went wrong? Didn't I use Groovy 2.0? Didn't I pass the `--indy` flag correctly? The [solution](http://permalink.gmane.org/gmane.comp.lang.groovy.devel/26698) is simple, once you understand your Groovy installation. The Groovy JARs used by `groovyc` are in `$GROOVY\_HOME/lib/`, but the indy JARs are in `$GROOVY\_HOME/indy/`. So replace the Groovy JAR with the indy version.

```sh
cd $GROOVY_HOME
cp -R lib lib.org
cp indy/groovy-2.0.1-indy.jar lib/groovy-2.0.1.jar
```

Now the above sample should work, but it really looks like the Groovy developers do not want you to use invokedynamic. They made it as difficult as possible, but why?

## Loosing previous optimizations with invokedynamic
The Groovy developers have spent a lot of time to get Groovy's runtime faster. One great step was the primitive optimization introduced with Groovy 1.8. But these optimizations are not available if everything is delegated to the JVM, what happens with invokedynamic.

You can test it using a simple [Fibonacci sample](https://gist.github.com/3293383). Running the sample on my machine with `fibonacci(42)`, the result looks like this:

```
Java: 1.43s
Groovy 1.8 or 2.0: 3.08s
Groovy 2.0 with indy: 6.55s
```

## It's just the first step for Groovy
It is good for Groovy to support invokedynamic, but the support is not ready yet. Some code might benefit from it, but other does definitively not. The JVM currently does not support all optimizations the Groovy runtime already does.

Making the usage of invokedynamic difficult hopefully prevents people from using it without knowing about the impacts. So we'll see, how well Groovy and invokedynamic will work together in future versions.
