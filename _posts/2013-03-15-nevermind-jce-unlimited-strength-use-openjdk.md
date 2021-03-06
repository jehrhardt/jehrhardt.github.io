---
title: "Nevermind JCE unlimited strength, use OpenJDK"
date: 2013-03-15 08:42
---

If you want to use keys longer than 256 for cryptography in Java, you will have to install the [JCE Unlimited Strength Jurisdiction Policy](http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html). It adds support for bigger keys.

But there is a much simpler way to do this on Linux. Some distributions like RHEL / CentOS or Ubuntu come with unlimited strength JCE build into their own OpenJDK packages.

On Ubuntu install the OpenJDK 7 package:

```sh
sudo apt-get install openjdk-7-jre-headless # on server
sudo apt-get install openjdk-7-jdk openjdk-7-source # on developer machine
```

On RHEL 6 / CentOS 6 install the OpenJDK 7 package this way:

```sh
yum install java-1.7.0-openjdk # on server
yum install java-1.7.0-openjdk-devel # on developer machine
```

Both have unlimited encryption build in. You can verify it with a simple [code snippet](https://gist.github.com/jehrhardt/5167854)
