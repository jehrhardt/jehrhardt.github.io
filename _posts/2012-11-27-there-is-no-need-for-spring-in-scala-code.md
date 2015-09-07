---
title: "There is no need for Spring in Scala code"
date: 2012-11-27 04:26
---

Why are Java developers using Spring in so many applications? There are plenty of reasons today, but one of the most important is to do Dependency Injection. There are good reasons to do Dependency Injection in your Java Code, but the most important is testing.

```java
public class Butler {
  private final GreetingRepository greetingRepository = new GreetingRepository();
}
```

When we want to write a unit test for the above code, there is no way to mock our `GreetingRepository` variable. Dependency Injection solves this problem, by putting the call of the constructor outside the class. This allows us to inject a mock object in our unit tests.

```java
public class Butler {
  private final GreetingRepository greetingRepository;

  public Butler(GreetingRepository greetingRepository) {
    this.greetingRepsitory = greetingRepository;
  }
}
```

In our production code, we would probably use Spring or if we want to be cool Google Guice to instantiate the `Butler` class and resolve it's dependency. In Scala we would not!

Scala comes with a lot of language features we should miss in Java. One is default values for parameters.

```scala
class Butler(greetingRepository: GreetingRepository = new GreetingRepository()) {}
```

Now our Scala butler can be instantiated in two ways. In our production code, we simply use the constructor without arguments. Scala will use the default value instead. In our unit tests, we can instantiate the class and explicitly put a mock object in the constructor call.
