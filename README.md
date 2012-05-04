tablecloth.js
=============

tablecloth.js is a jQuery plugin that helps you easily style HTML tables along with some simple customizations.

We've all been there. Either you're redesigning a large site or working on a completely new one... styling tables is typically tedious and time-consuming. If you'd rather spend your valuable time making the other elements of your site pretty, use tablecloth to do the heavy lifting:

```javascript
// Without any customizations
$("table").tablecloth();
 
// With customizations
$("table").tablecloth({
theme: "default",
bordered: true,
condensed: true,
striped: true,
sortable: true,
clean: true,
cleanElements: "th td",
customClass: "my-table"
});
```

tablecloth builds off the [Twitter Bootstrap](http://twitter.github.com/bootstrap/). It also includes popular jQuery table manipulation plugins like [tablesorter](http://tablesorter.com/docs/).