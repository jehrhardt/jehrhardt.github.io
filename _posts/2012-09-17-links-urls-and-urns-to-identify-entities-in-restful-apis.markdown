---
title: "Links, URLs and URNs to identify entities in RESTful APIs"
date: 2012-09-17 23:30
categories:
- RESTful APIs
---

Modern APIs are [RESTful](https://en.wikipedia.org/wiki/REST). It is a
good idea, since REST is based on the main principles of the
[WWW](https://en.wikipedia.org/wiki/WWW) like
[HTTP](https://en.wikipedia.org/wiki/HTTP) and
[URLs](https://en.wikipedia.org/wiki/URL). URLs allow browsers to
identify resources.

But how are you dealing with URLs in your API? Are you telling your
users how to create URLs?  And what is about navigation?  Do your
users know how to navigate through the data your API offers? Knowing
some basic priciples might improve your APIs a lot.

### Starting small

Most applications start small. So let us look at a simple example a
photo album application. Everytime a user opens the URL of a photo
album in his browser, a HTML page is loaded. In this case, the page
might contain thumbnails of all the photos from the album. The
thumbnails might be hyperlinks pointing to the URL of the image
details. If the user clicks on the thumbnail a new HTML page opens
with a bigger view of the picture and probably more information about
it.

This simple case contains a really powerful concept - hyperlinking. If
we want to provide a mobile app to our users or an API for third party
developers, we should adapt this awesome concept to our API.

In JSON based formats hyperlinks can be put into an attribute called
links, which is an array of link objects. This might look like below.

```javascript
{"links": [
  {"title": "Cool picture",
   "rel": "details",
   "href": "https://example.org/albums/12/photos/13"}
]}
```

A mobile app can also show the thumbnails and store locally the URL
from the link object. When the user tabs with his finger on the image,
the app can do the same as the browser does. It can simply follow URL
from the link to show the image details.

### The power of links, when you grow

Hopefully our service is growing and a simple monolithic web
application with a MySQL database does not work anymore. So we are
starting to store our image files and metadata in a different
application highly optimized to store masses of photos. This is where
hyperlinking shows it's real power.

Our new photo storage application might provide URLs with a completely
different structur. The URLs even might point to a different subdomain
as our web application. While the image tags in our HTML contain other
URLs, the browser does not care about any change at this point.

Different to the browser, the JSON for our mobile app might now be
served partially by the photo storage application. This is possible,
since the app does not know anything about the URL. It just gets it
from a link object in the JSON document.

### Where hyperlinking does not fit anymore

Although hyperlinking allows clients to behave similar to browsers and
thus become more independent of URL structurs, this concept is
limited. It works well, when the client has a temporary local state,
where the links are stored.

When a user now opens the URL of a photo album in the browser, how
does the photo album application on the server know, which thumbnail
URLs it should put to the image tags? The applications could store
some redundant data, that allows some mapping. Or the album
application might store the URLs to the photos in the storage
application. Both are no good solution to the problem.

The problem lies in the URLs, since the L is for location, an URL does
not identify an entity of our application, it identifies a location,
where the entity can be found. Well it is an easy task to create
different URLs all pointing to the same entity. But how can entities
be identified in RESTful APIs? Even across different applications or
companies?

There are two classes of
[URIs](https://en.wikipedia.org/wiki/URI). URLs are one of them and
[URNs](https://en.wikipedia.org/wiki/Uniform_Resource_Name) are the
other. The N in URN is for name and thus a URN is a name or better an
identifier for an entity. In a JSON format simply place the URN into
an id attribute for the object. The client can now store a global
identifier, that works location independent.

Using a URN like ```urn:my-company:photo:13``` allows us to store an id
for each photo from the storage application in the album's
database. At same time we can define a simple mapping between URNs and
URLs using [URI templates](http://tools.ietf.org/html/rfc6570).

Using ids is not as smart as hyperlinks, but with URNs they can be
handled also pretty well.
