---
title: "Docker 101 on Mac for developers"
date: 2015-05-20 06:15
---

[Docker](https://www.docker.com) is a new virtualization technology, was the first thing, I heard about it. But I realized, that it is something different and it can be very useful for software development. You can easily run a [PostgreSQL](https://registry.hub.docker.com/u/library/postgres/) database, an [elasticsearch](https://registry.hub.docker.com/u/library/elasticsearch/) server and many other tools on your local development machine without installing any of them. You can even share the settings across your team. So Docker is a great complement to your Maven, SBT, Bundler, …

## The basics
Docker is build of a daemon and a command line interface.

The daemon creates and runs the containers and since they are [Linux containers](https://en.wikipedia.org/wiki/LXC), the daemon must run on a Linux machine. Sadly Mac OS X is UNIX but not Linux, so you can not run the daemon under Mac OS X. The easiest way to fix this is installing [docker-machine](https://docs.docker.com/machine/) via [Homebrew](http://brew.sh)

```sh
brew install docker-machine
```

docker-machine allows you to create virtual machines running Linux with a preinstalled Docker daemon. You can run them on [Amazon EC2](https://docs.docker.com/machine/#amazon-web-services), [Rackspace](https://docs.docker.com/machine/#rackspace), …, or just locally on [VirtualBox](https://docs.docker.com/machine/#oracle-virtualbox). So download and install [VirtualBox](https://www.virtualbox.org/wiki/Downloads) and create a machine on it.

```sh
docker-machine create --driver virtualbox dev
```

This will create a Linux machine based on [boot2docker](http://boot2docker.io) - a tiny Linux distribution for running Docker via VirtualBox. The created machine is named dev and will be available under this name through docker-machine. You can create other machines on AWS …, if you want, but for local development this might be enough for the moment.

The second component of Docker is its [command line interface](https://docs.docker.com/reference/commandline/cli/). This runs also on Mac OS X and access the Docker daemon via a [RESTful API](https://docs.docker.com/reference/api/docker_remote_api/). To install the command line interface use [Homebrew](http://brew.sh)

```sh
brew install docker
```

The default behavior of the `docker` command is connecting to a local daemon via a UNIX socket. This works fine under Linux, but not Mac OS X, where the daemon is running somewhere else. But docker-machine to the rescue

```sh
eval "$(docker-machine env dev)"
```

This will setup your environment in a way, that the docker client will connect to the daemon on the machine named `dev`. Life will even become much easier, when you put the above command to your `.bashrc` or `.zshrc` file, so [everything will be ready in a fresh shell](https://gist.github.com/jehrhardt/6724571/9c1971f52a5137ff5ff4eb07fa8174d81a7c0aeb#file-zshrc-L24).

## Run and use containers
Lets try a simple example with our new Docker environment and launch [elasticsearch](https://www.elastic.co/products/elasticsearch) in a container. If we install and run elasticsearch locally, it will be available via curl

```sh
curl http://localhost:9200
```

Running elasticsearch in a container is easy, since there is an official [elasticsearch image](https://registry.hub.docker.com/u/library/elasticsearch/) available.

```sh
docker run --rm -p 9200:9200 elasticsearch
```

This will pull the latest version of the elasticsearch image, publish the container's port `9200` to our Linux vm's port `9200` and delete the container, once we stoped elasticsearch. Since the container is running in our Linux vm, we cannot access it it via `localhost` and need the machine's IP instead. docker-machine will provide it to us

```sh
curl http://`docker-machine ip`:9200
```

## Use it in software projects
Running the above command to start a new docker container during development is hard to maintain. You can create a little shell script to share the command with your colleagues, but it is much easier with [docker-compose](https://docs.docker.com/compose/) (former fig). You can also install it via [Homebrew](http://brew.sh)

```sh
brew install docker-compose
```

In a software project, where you use elasticsearch, you can just create a file named `docker-compose.yml` with the following content

```yaml
es:
  image: elasticsearch:1.5
  ports:
    - "9200:9200"
```

Now run it via

```sh
docker-compose up es
```

This will do the same as above, but you can easily [share additional configurations](https://docs.docker.com/compose/yml/) and define multiple containers and [dependendencies between them](https://docs.docker.com/compose/yml/#links) in the [YAML](https://en.wikipedia.org/wiki/YAML) file.

## What else?
With `docker-machine`, `docker` and `docker-compose` you should have some cool tools to work with Docker and you can install all of them via Homebrew. But there are even more things for your Mac.

If your are an [oh-my-zsh user](http://ohmyz.sh), there is also a [docker plugin](https://github.com/robbyrussell/oh-my-zsh/tree/master/plugins/docker) available. It provides you great autocompletion for the `docker` command and makes it even more fun.

On Mac OS X there is also a GUI available. It is named [Kitematic](https://kitematic.com) and provided by the Docker guys.
