---
title: "Emacs as daemon"
date: 2013-04-06 08:05
categories:
- Emacs
---

I have already posted about using [Emacs as my default editor for Git commit
messages](/blog/2012/10/27/emacs-as-default-editor-for-git) and [setting up
Emacs quickly](/blog/2013/01/08/emacs-as-primary-text-editor-for-lazy-developers).
But you can improve Emacs usage very well by using it as a daemon.

Running Emacs as a daemon can be done pretty simple by running
```emacs --daemon``` in your terminal. This loads all your Emacs configuration
and starts an Emacs server in the backround. To use this server there is a
client command. ```emacsclient -t README.md``` will open the client, connect it
to the server and opens the file README.md. The benefit is the fast start up of
the client combined with tons of additional modes loaded in the backround
server.

You can simply use the above command to open the client as your default editor
for Git. ```git config --global core.editor 'emacsclient -t'``` will set this
for you. Running ```git commit``` will now open Emacs very fast. You can write
down your commit message and save with ```C-x C-s```. To leave the client use
```C-x #```. To abort the commit leave the message blank and leave the client.
That's it.

Reducing characters to type in the terminal is always a good idea and since
```emacsclient -t``` is much longer then ```emacs``` you should define an alias
for this.

```sh
alias e=emacsclient -t
```

Add the above line to your .zshrc or .bashrc file. This allows you to run
```e README.md``` to open the file README.md very fast in Emacs.
