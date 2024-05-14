# Some Technical Points

1. Currently I am linking to stylesheet `style.css`, which I wrote for a former web site.

Use

```
<link rel='stylesheet' type="text/css" href="style.css">
```


2. I like to place deleted text inside a del element, as in

```
Mrs Jones<del>, whom I dislike,</del> did not come to the party.
```

I occasionally choose to write inserted text in an ins element, too, but I do not like the default underline in Firefox.


To which end we need to style the del elements del and ins like:
```
del {
  display: none;
}
ins {
  text-decoration: none;
}
```

3. Currently I intend for both my stylesheets (style.css and stylesheet.css) to be identical. I consider the former the master, so the latter should not be edited, just updated through:

```
cp style.css stylesheet.css
```
