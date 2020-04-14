// ==UserScript==
// @name Use Markdown, sometimes, in your HTML.
// @author Paul Irish <http://paulirish.com/>, bits by Thaddee Tyl <http://espadrine.github.com/>
// @link http://git.io/data-markdown
// @include *
// ==/UserScript==


// If you're not using this as a userscript just delete from this line up. It's cool, homey.

[].forEach.call( document.querySelectorAll('[data-markdown]'), function(elem){

  if (!window.Showdown)
    document.write('<script src="https://raw.github.com/github/' + 
                   'github-flavored-markdown/gh-pages/scripts/showdown.js">\x3C/script>');
  
  (function doDown() {
    if (!window.Showdown) { setTimeout(doDown, 500); return; }
    // strip leading whitespace so it isn't evaluated as code
    var md      = elem.textContent.replace(/(^\s+)|(\n\s+)/g,'\n')
      , html    = (new Showdown.converter()).makeHtml(md);

    // here, have sum HTML
    elem.innerHTML = html;
  })();

});