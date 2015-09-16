---
title: "Java 8 date time API explained"
date: 2015-09-16 06:11
---

Java developers have been used to `java.util.Date` for years, but with Java 8 a new API in `java.time` and its sub-packages like `java.time.format` has been added. Now it is time to learn this new way to deal with date and time on the JVM.

## Drop the UNIX time
`java.util.Date` is designed around the [UNIX time](https://en.wikipedia.org/wiki/Unix_time), which is still in mind of most developers. Creating a new object will use the current UNIX timestamp as the base

```java
Date date = new Date();
```

`java.time` instead provides an API, that does not really care about UNIX time. It comes with four basic classes that provide you different levels of details:

* [java.time.LocalDate](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDate.html): A date without time
* [java.time.LocalTime](https://docs.oracle.com/javase/8/docs/api/java/time/LocalTime.html): A time without date
* [java.time.LocalDateTime](https://docs.oracle.com/javase/8/docs/api/java/time/LocalDateTime.html): A date with time
* [java.time.ZonedDateTime](https://docs.oracle.com/javase/8/docs/api/java/time/ZonedDateTime.html): A date with time and time zone

They provide a similar API to deal with them

```java
LocalDate date = LocalDate.now();
LocalTime time = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();
ZonedDateTime zonedDateTime = ZonedDateTime.now();
```

The `now()` method is overloaded, so you can pass a `java.time.Clock` object to it. This is handy during unit tests, where you want to freeze time 😉:

```java
// In production
Clock clock = Clock.systemDefaultZone();

// In tests
Clock clock = Clock.fixed(Instant.now(), ZoneId.systemDefault());

LocalDateTime dateTime = LocalDateTime.now(clock);
```

## Use ISO 8601
The interesting about the `java.time` API is, it is designed around [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601). This makes it great for dealing with `String`s and human readable date and time representations. I highly recommend the usage of ISO 8601 based dates, since it makes dates much easier to read for developers. If you provide a RESTful API for example, a developer trying your API via `curl` can directly read a date like 2015-09-16.

The classes in the `java.time` API provide a `parse` method for this:

```java
LocalDate date = LocalDate.parse("2015-09-16");
LocalTime time = LocalTime.parse("05:33:23");
LocalDateTime dateTime = LocalDateTime.parse("2015-09-16T05:33:23");
ZonedDateTime zonedDateTime = ZonedDateTime.parse("2015-09-16T05:33:23+02:00[Europe/Paris]");
```

If you call the `toString` method on the above objects, you will get the same representation back. Internally the classes use a `java.time.format.DateTimeFormatter` object to parse or format. If your dates and times are in a different format, you can pass your own formatter to it:

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("EEE, dd MMM yyyy HH:mm:ss zzz");
ZonedDateTime zonedDateTime = ZonedDateTime.parse("Wed, 16 Sep 2015 05:33:23 CEST", formatter);
String dateTime = formatter.format(zonedDateTime);
```

The above example will only work on machines with English as default locale. If it is running on a machine with German locale, it will fail due to the name `Wed` at the beginning. It is highly recommended to pass the right locale to the above formatter:

```java
DateTimeFormatter enFormatter = DateTimeFormatter.ofPattern("EEE, dd MMM yyyy HH:mm:ss zzz", Locale:ENGLISH);
DateTimeFormatter deFormatter = DateTimeFormatter.ofPattern("EEE, dd MMM yyyy HH:mm:ss zzz", Locale:GERMAN);

ZonedDateTime.parse("Wed, 16 Sep 2015 05:33:23 CEST", enFormatter);
ZonedDateTime.parse("Mi, 16 Sep 2015 05:33:23 MESZ", deFormatter);
```

## Dealing with UNIX time
Although the `java.time` API is not designed around it, it allows you to work without UNIX timestamps. Sometimes you will still need them. The simplest way to handle them is using `java.time.Instant`:

```java
Instant instant = Instant.ofEpochSecond(1442374403);
```

## Conclusion
There is much more to say about this API like how to convert between these different types, but this might go into another post. For the moment we have seen that Java now has a date and time API, that provides more powerful types than the old `java.util.Date`. I guess this should already be enough to start using it.
