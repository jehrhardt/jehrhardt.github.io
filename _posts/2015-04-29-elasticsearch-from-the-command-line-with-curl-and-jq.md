---
title: "Elasticsearch from the command line with curl and jq"
date: 2015-04-29 06:20
---

What I like most about elasticsearch, is it's HTTP and JSON based API. This makes it pretty easy to work with it from the command line. My favorite way to access elasticsearch is via `curl` as an HTTP client.

```sh
curl http://localhost:9200
```

will print some output like this

```javascript
{
  "status" : 200,
  "name" : "Iguana",
  "cluster_name" : "elasticsearch_foo",
  "version" : {
    "number" : "1.5.1",
    "build_hash" : "5e38401bc4e4388537a615569ac60925788e1cf4",
    "build_timestamp" : "2015-04-09T13:41:35Z",
    "build_snapshot" : false,
    "lucene_version" : "4.10.4"
  },
  "tagline" : "You Know, for Search"
}
```

But the JSON will not be colored in your Termianl and you are probably not interested in all of the output. This is where `jq` comes in. It is just a JSON processing tool for the command line. You can easily install it.

```sh
# Mac OS X
brew install jq

# Ubuntu
sudo apt-get install jq
```

and run the above command again, but with a jq filter

```sh
curl http://localhost:9200 | jq '.'
```

The simple `jq '.'` command will do pretty printing for your JSON and of course it will also work with JSON files.

```sh
cat package.json | jq '.'
```

## Filter elasticsearch output
But `jq` can do a lot more than just pretty printing of JSON. It can also give you parts of the JSON document.

```sh
curl http://localhost:9200 | jq '.version.number'
```

Will give you the output `"1.5.1"` and to drop the JSON specific quotes add the `-r` option

```sh
curl http://localhost:9200 | jq -r '.version.number'
```

A more interessting example is dealing with search.

```sh
curl 'http://localhost:9200/foo/_search?q=*:*' | jq '.'
```

will output the colored but noisy JSON

```javascript
{
  "took": 2,
  "timed_out": false,
  "_shards": {
    "total": 5,
    "successful": 5,
    "failed": 0
  },
  "hits": {
    "total": 2,
    "max_score": 1,
    "hits": [
      {
        "_index": "foo",
        "_type": "bar",
        "_id": "1",
        "_score": 1,
        "_source": {
          "name": "Sid Vicious"
        }
      },
      {
        "_index": "foo",
        "_type": "bar",
        "_id": "2",
        "_score": 1,
        "_source": {
          "name": "Johnny Rotten"
        }
      }
    ]
  }
}
```

If we just want to know how many results were found, we can access the `.hits.total` field like above, but if we are just interested in the raw results without any elasticsearch meta data, we can also do it.

```sh
curl 'http://localhost:9200/foo/_search?q=*:*' | jq '.hits.hits[]._source'
```

will filter just the relevant information from the result.

```javascript
{
  "name": "Sid Vicious"
}
{
  "name": "Johnny Rotten"
}
```

## Index elasticsearch documents
But `jq` can even do more for us. If we want to index documents, we need to post JSON to elasticsearch. So let's create a JSON template file with an empty object.

```sh
echo '{}' > bar.json
```

Now we can use the template, let `jq` add a `name` property and index it via `curl`.

```sh
cat bar.json | jq '.name = "Paul Cook"' | curl -XPUT localhost:9200/foo/bar -d @-
```

## It's only HTTP and JSON
The above examples are just giving you a small outlook on what `curl` and `jq` can do. They work pretty well for elasticsearch, but you can also use them for any other API, that is based on HTTP and JSON.
