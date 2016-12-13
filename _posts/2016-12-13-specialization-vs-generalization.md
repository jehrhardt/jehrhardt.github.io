---
title: "Specialization vs generalization"
date: 2016-12-13 14:21
---

Specialization had one of the most significant impacts on human success throughout history. This makes us often follow our intuition and see specialization as the way to go. But this can be a dangerous trap.

## Advantages of specialization
When the first crafts appeared thousands of years ago, they were based on the simple principle of specialization. Some people became excellent at doing pottery or forging. And this allowed the whole society to reach new levels of human development. We can even find it in our younger history. The industrialization is a great example of the advantages of specialization. As well as our modern science, that would not exists without specialization.

It seems so obvious. When a team is built by an experienced front end developer and an experienced back end developer, it will out perform a team of two full stack developers. The specialist can be more productive and deliver a higher quality than the generalists, who know a little bit of everything, but nothing really deeply. This can be seen well in the development of native apps for mobile devices. Almost all companies hire specialist for this job and build a mobile development team.

Our intuition tells us: Specialization is superior!

## Advantages of generalization
Let's look into queuing theory. There is a really great example that might help us to understand better.

We assume to have a security check at an airport and there are tow agents to check the passengers. What is more effective, having a single queue of people for each agent or having a combined queue for both?

The answer is: The combined queue is more effective!

This makes absolutely sense, since the combined queue allows the agents to parallelize the work and handle eventual delay at one agent. This level of effectiveness even scales. When we hire more agents, the effect of parallelization grows. I highly recommend you to read [Baron Schwartz' Essential Guide To Queuing Theory](https://www.vividcortex.com/resources/queueing-theory) to learn more about it.

Let's compare this with our two developer teams. When a team is build by one front end developer and one back end developer, we will finally end up with two queues. One queue with all front end tasks and one with all back end tasks. In a team with two full stack developers we will have one combined queue, since both developers can do front end and back end tasks. This could be seen best, when the front end developer becomes sick and her tasks stay in to do, while the back end developer might have nothing to do.

The problem of scaling seems to be solved. We just hire full stack developers to grow our team.

## Team scaling fallacy
Sadly the world is more complex. One limitation of growing a team is the additional communication. When n is the number of people in a team n * (n - 1) / 2 is the number of links between those people. While a 6 people team has 15 links, a 12 people team has already 66 links and a 50 people team has 1225 links 😲.

As a result scaling an organization by adding further generalist is limited through the additional communication in a growing team. The usual response to this is the [two pizza team rule](http://blog.idonethis.com/two-pizza-team/). A team working together should not be larger than the number of people, who can be fed by two pizzas.

Thus when a team grows beyond the size of a two pizza team, splitting the team into smaller teams becomes necessary.

## Component vs feature teams
When splitting a team into smaller ones, many people tend to go for component teams. A simple example would be to build a front end team with all the front end developers and a back end team with all the back end developers. This approach is once again specialization. There will be a queue with all the front end tasks for the front end team and a second queue with all the back end tasks for the back end team.

The problem with component teams is, that new product features usually require changes on the front end and the back end. Thus the feature needs to be distributed across multiple teams and this requires a lot of additional communication and management. Interestingly component teams are usually the starting point for a service oriented architecture. Sadly the resulting distributed system does not solve any problems, since the dependencies between teams through working on the same product and features still exist. Markus Andrezak has written a nice summary [how component teams work in practice](http://ueberproduct.de/en/planning-for-component-teams-the-hell-of-it/).

As we have already learned from queuing theory, generalization can be a better approach. When our company puts all new product features in a single common queue, each team can simply pull the next feature and develop it. The important foundation for these feature teams is, that each team must be able to implement each product feature. This is much easier to achieve with a monolithic architecture. Although service oriented architectures are hyped a lot, [embracing the monolith can be a good choice](https://m.signalvnoise.com/the-majestic-monolith-29166d022228).

So do feature teams now solve our scaling problems?

## Growing beyond feature teams
Feature teams are also limited scaling. The monolithic architecture still makes everybody work on the same code base. Thus some communication overhead will still be there and grow a lot with a growing number of teams.

Many companies try to achieve further scaling by applying a [service oriented architecture](http://www.martinfowler.com/articles/microservices.html). But this does not mean, that teams become component teams. Feature teams are the best foundation for starting with a service oriented architecture. Instead of putting all new product features into the same common queue, related features will go into separate specialized queues.

Let's say all features related to search in our product will be done by the same feature team. This includes front end and back end tasks and everything else. The team could slowly become the owner of the whole search part of our business. It can also build it's own application instead of developing the features inside a large monolithic code base. The team can become more autonomous.

Compared to component teams this approach has the significant advantage, that most product features are still done by a single team. They are not distributed across multiple teams.

Autonomous teams are a kind of specialization, that might be required to scale further, when the generalization approach does not work anymore. But it also means that we loose the possibility to balance features across multiple teams as before. Even worse finding this specialization is not easy. It works best, when we apply the [pareto principle](https://en.wikipedia.org/wiki/Pareto_principle). Thus 80 % of the features should have neither technical nor product dependencies to other teams, while only 20 % of the features might have some.

## Is specialization overrated?
History shows us how powerful specialization is, but it is not a silver bullet. It is important to know the various trade offs and limitations, when choosing either a specialization or a generalization strategy to scale our organization.

## tldr
Specialization vs generalization is one of the fundamental problems in scaling software development organizations.
