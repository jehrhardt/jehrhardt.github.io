---
layout: post
title: "EuroClojure - The First Day"
date: 2013-10-14 23:25
---

Today was the first day of
[EuroClojure 2013](http://euroclojure.com/2013/programme/) and it was
a really interesting first conference day. Here is my summary for all
who missed it or want to remember.

### States and Nomads

The opening keynote was done by
[Zach Tellman](https://twitter.com/ztellman) and he was refering to
the past. He talked about Greek mythology, the architecture of
[Brasília](https://en.wikipedia.org/wiki/Bras%C3%ADlia) and the of
course the
[Design Pattern book](http://www.amazon.com/Design-Patterns-Elements-Object-Oriented-ebook/dp/B000SEIBB8/). His
talk was finished with a list of interesting books:

<blockquote class="twitter-tweet"><p><a href="https://twitter.com/search?q=%23euroclojure&amp;src=hash">#euroclojure</a> <a href="https://twitter.com/ztellman">@ztellman</a>&#39;s reading list for those who missed it. <a href="http://t.co/WHNDYgd69L">pic.twitter.com/WHNDYgd69L</a></p>&mdash; Bodil Stokke (@bodil) <a href="https://twitter.com/bodil/statuses/389655080041213953">October 14, 2013</a></blockquote>

### Evolving life in the browser

The next talk was
[Evolving life in the browser](http://euroclojure.com/2013/programme/#Evolving_Life_In_The_Browser)
by [Tom Hall](https://twitter.com/thattommyhall). His talk was about
something really new to me -
[Genetic Programming](https://en.wikipedia.org/wiki/Genetic_programming). The
cool thing were the demos he showed like
[Robbie the robot](http://robbie.thattommyhall.com/robbie/evolve),
which is written in ClojureScript and runs inside of the browser:

<blockquote class="twitter-tweet"><p>Melting my phone at <a href="https://twitter.com/EuroClojure">@EuroClojure</a> in <a href="https://twitter.com/thattommyhall">@thattommyhall</a> &#39;s talk <a href="http://t.co/79qdFtrVfn">pic.twitter.com/79qdFtrVfn</a></p>&mdash; Jen Smith (@JenniferSmithCo) <a href="https://twitter.com/JenniferSmithCo/statuses/389663661138382848">October 14, 2013</a></blockquote>

It looks like he shares
[some interesting code on Github](https://github.com/thattommyhall). You
should also checkout [his blog](http://www.thattommyhall.com).

### Build your own Lisp

[Bodil Stokke](https://twitter.com/bodil) was giving a funny talk
about creating your own Lisp. Her own Lisp is called BODOL and you can
[find it on Github](https://github.com/bodil/BODOL). She is using
[Marc Engelberg's instaparse](https://github.com/Engelberg/instaparse)
library to parse BODOL code. Beside the great talk there was the cool
fact, that she was running
[her presentation slides](https://github.com/bodil/building-lisp) with
[reveal.js](https://github.com/hakimel/reveal.js) inside of Emacs. How
it works? She gives the answer herself:

<blockquote class="twitter-tweet"><p>Use Emacs to run your Reveal.js slide decks? No problem. <a href="https://twitter.com/search?q=%23emacsrocks&amp;src=hash">#emacsrocks</a> <a href="https://t.co/C7yDoJLJAD">https://t.co/C7yDoJLJAD</a> <a href="http://t.co/1QBo0xI2cB">pic.twitter.com/1QBo0xI2cB</a></p>&mdash; Bodil Stokke (@bodil) <a href="https://twitter.com/bodil/statuses/378940392747450369">September 14, 2013</a></blockquote>

### Liberator

There was a talk about the
[Liberator library](http://clojure-liberator.github.io/liberator/) by
[Philipp Meier](https://twitter.com/ordnungswprog). It looks like a
good option for creating RESTful APIs in Clojure. To give you a hello
world snippet:

```clojure
(defresource hello-world
  :available-media-types ["text/plain"]
  :handle-ok "Hello, world!")
```

The snippet shows how to define a resource and declare media
types. That's exactly, what you need in RESTful APIs.

### Creative machines

My favorite talk of the day was by
[Joseph Wilk](https://twitter.com/josephwilk) about
[Creative Machines](http://euroclojure.com/2013/programme/#Creative_Machines). He
showed a couple of algorithms composing music. You can
[find the code on Github](https://github.com/josephwilk/musical-creativity). [Suvash Thapaliya](https://twitter.com/suvash)
was absolutely right about this talk:

<blockquote class="twitter-tweet"><p>Absolutely mindblown by <a href="https://twitter.com/josephwilk">@josephwilk</a> talk on creative machines. If this was the only talk <a href="https://twitter.com/EuroClojure">@EuroClojure</a> I&#39;d still be more than glad I joined.</p>&mdash; Suvash Thapaliya (@suvash) <a href="https://twitter.com/suvash/statuses/389717455238868992">October 14, 2013</a></blockquote>

Joseph also refered to David Cope's Emily Howell - a computer
generated song. But listen yourself:

<iframe width="480" height="360" src="https://www.youtube-nocookie.com/embed/QEjdiE0AoCU?rel=0" frameborder="0" allowfullscreen></iframe>

### Drones with Clojure

After Joseph's great talk and the lunch, what else should have come?
Of course [Jarppe Lansio](https://twitter.com/jarppe). He simply had a
[quadrocopter](https://en.wikipedia.org/wiki/Quadrocopter) and
controled it via a
[leap motion](https://www.leapmotion.com/product). That's really cool!

<blockquote class="twitter-tweet"><p>Flying a quadcopter with <a href="https://twitter.com/search?q=%23Clojure&amp;src=hash">#Clojure</a> at <a href="https://twitter.com/EuroClojure">@EuroClojure</a> <a href="https://twitter.com/search?q=%23EuroClojure&amp;src=hash">#EuroClojure</a> 2013 <a href="http://t.co/LMGGMkfTg2">http://t.co/LMGGMkfTg2</a></p>&mdash; Daniel Kvasnička (@dkvasnickajr) <a href="https://twitter.com/dkvasnickajr/statuses/389876212207984641">October 14, 2013</a></blockquote>

You can grap [the code from Github](https://github.com/jarppe/sormilla).

### 3D game design

A talk that confused me, when I read the programme was
[Functional 3D Game Design](http://euroclojure.com/2013/programme/#Functional_3D_Game_Design)
by [James Reeves](https://twitter.com/weavejester). James has worked
on different Clojure web development libraries like
[ring](https://github.com/ring-clojure/ring) or
[hiccup](https://github.com/weavejester/hiccup), but now he was
talking about 3D game design. He showed us a new library called
[reagi](https://github.com/weavejester/reagi), which implements
[functional reactive programming](https://en.wikipedia.org/wiki/Functional_reactive_programming). It
can be used to create smooth behavior in 3D graphics:

<blockquote class="twitter-tweet"><p>FRP style 3D dev in clojure. <a href="https://twitter.com/weavejester">@weavejester</a> demoing Reagi at <a href="https://twitter.com/search?q=%23euroclojure&amp;src=hash">#euroclojure</a> <a href="https://t.co/wwXu5PZawQ">https://t.co/wwXu5PZawQ</a> <a href="http://t.co/Fc0sHY4Dbs">pic.twitter.com/Fc0sHY4Dbs</a></p>&mdash; Tero Parviainen (@teropa) <a href="https://twitter.com/teropa/statuses/389758877786324994">October 14, 2013</a></blockquote>

### Common Clojure smells

The last talk about
[Common Clojure Smells](http://euroclojure.com/2013/programme/#Common_Clojure_smells)
was given by [Jen Smith](https://twitter.com/jennifersmithco). The
topic is really important, since many code smells from the object
oriented world can not be applied to a Lisp, but others can be
found. And of course she made the mass laugh with a picture of
[Bruce Durling](https://twitter.com/otfrom) on her slide:

<blockquote class="twitter-tweet"><p>Theeeeere he is! <a href="https://twitter.com/JenniferSmithCo">@JenniferSmithCo</a> <a href="https://twitter.com/otfrom">@otfrom</a> <a href="https://twitter.com/search?q=%23euroclojure&amp;src=hash">#euroclojure</a> <a href="http://t.co/qthCWe006T">pic.twitter.com/qthCWe006T</a></p>&mdash; Bodil Stokke (@bodil) <a href="https://twitter.com/bodil/statuses/389774013914181633">October 14, 2013</a></blockquote>

### What else?

You can follow the event on twitter with the hash tag
[#euroclojure](https://twitter.com/search?q=%23euroclojure).

[Richard West](https://twitter.com/RiczWest) has put is own kind of
summary of the day on the web:

<blockquote class="twitter-tweet"><p>Having a great time at <a href="https://twitter.com/search?q=%23EuroClojure&amp;src=hash">#EuroClojure</a>. Here&#39;s a brief mind-map / post on the <a href="https://twitter.com/search?q=%23keynote&amp;src=hash">#keynote</a>: EuroClojure – Day 1 <a href="http://t.co/E6wZgyJ9aE">http://t.co/E6wZgyJ9aE</a></p>&mdash; Richard West (@RiczWest) <a href="https://twitter.com/RiczWest/statuses/389679871485833217">October 14, 2013</a></blockquote>

Anything I have missed or some additional photos? Just add a comment!
