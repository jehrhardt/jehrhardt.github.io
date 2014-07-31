---
title: "Making stateless applications deal with RESTful state"
date: 2012-11-26 09:17
categories:
- RESTful APIs
---

One of the core priciples of RESTful APIs is being stateless on the
server. Instead of putting it on the server state is transfered to the
client. We do not talk about state as it might appear in many stateful
applications. The state in RESTful APIs is represented through
hyperlinks.

Hyperlinks allow applications to make navigation similar to
browsers. When you are developing a mobile application, your buttons
should behave like links in a browser. Your application should not
build the URLs to call. When the button is clicked it should call an
URL from a link. The state where the user is and how to get where he
wants is stored in the client by associating URLs from the server with
buttons.

When you are developing a web application, that renders HTML on the
server and you want to integrate some third party RESTful API, you
might have a problem. You can not store the links anywhere as long as
you want to keep your web application stateless. This constraint would
force you to start at the root URL and navigate down through a link
structure every request.

The solution is a simple key value cache. You can use it to store
state access. This does not mean you are caching where the user
currently is in your application, instead you are caching the links. A
simple example:

```javascript
{
  "links": [
    {
      "href": "http://api.foo.com/inbox/",
      "rel": "inbox"
    }
  ]
}
```

In the above JSON snippet the link object has a ```rel``` attribute. To
cache that link create a key from the rel attribute's value inbox and
store the URL. Now you can render some HTML with a different link:

```html
<a href="/foo/inbox/">My Foo Inbox</a>
```

Once the user clicks the link, you can simply grep the URL from the
cache and call it. No need for starting at ```http://api.foo.com``` and
following the links down to one with rel inbox.
