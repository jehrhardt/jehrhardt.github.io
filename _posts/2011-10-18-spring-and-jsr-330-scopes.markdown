---
layout: post
title: "Spring and JSR 330 scopes"
date: 2011-10-18 07:09
categories:
- Java
---

Spring 3 added support for
[JSR 330 configuration](http://download.oracle.com/javaee/6/api/javax/inject/package-summary.html),
so you can use ```@Named``` and  ```@Inject``` instead of ```@Component``` and
```@Autowired```. Unfortunately Spring's default scoping is not compatible with
JSR 330. Here is how it works:

Default behaviour
-----------------
By default Spring uses it's default scoping behaviour on JSR 330 configured
beans like below.

```java
@Named
public class GreetingService {
}
```

This means, that ```GreetingService``` will become a bean with singleton scope.

JSR 330 scopes
--------------
In difference to Spring JSR 330 defines, that the default scope of beans is
prototype, which means a new object is created everytime it will be injected
somewhere. If you want a different scoping you can create your own annotation for
this like descriped
[here](http://download.oracle.com/javaee/6/api/javax/inject/Scope.html). JSR 330
already comes with a predifined scope annotation for
[singletons](http://download.oracle.com/javaee/6/api/javax/inject/Singleton.html). To
make Spring behave as specified in JSR 330, you can use a different scope
resolver like below.

```xml
<context:component-scan base-package="my.package"
  scope-resolver="org.springframework.context.annotation.Jsr330ScopeMetadataResolver" />
```

Using this additional configuration, will make the above ```GreetingService```
bean prototype scoped. To make it a singleton bean again, you will need to use
the singleton scope annotation.

```java
@Named
@Singleton
public class GreetingService {
}
```

Custom scopes for JSR 330
-------------------------
Spring comes with further scopes like ```request``` or ```session```. JSR 330 does not
support them out of the box. You will have to create your own annotations for
this. Let's look, how to do this for the ```request``` scope.

1. Create your own scope annotation:

```java
@Scope
@Documented
@Retention(RUNTIME)
public @interface Request {
}
```

2. Extend ```Jsr330ScopeMetadataResolver``` to map your annotation on Spring's
   scope:

```java
public class CustomScopeMetadataResolver extends Jsr330ScopeMetadataResolver {

  public Jsr330SpringScopeMetadataResolver() {
    registerScope(Request.class.getName(), WebApplicationContext.SCOPE_REQUEST);
  }

}
```

3. Use your custom resolver in your Spring configuration:

```xml
<context:component-scan base-package="my.package"
  scope-resolver="my.resolver.package.CustomScopeMetadataResolver" />
```

The above sample will make all beans, that are annotated with your own
```@Request``` annotation request scoped.

### License

© 2011 Jan Ehrhardt - Licensed under the terms of
[CC-BY](http://creativecommons.org/licenses/by/3.0/).
