# Hello, Hello, World!

## SkyDom?
----
> SkyDom(skyDom.js) is a javascript library for beginners. (like myself)    
This uses a question mark and underscore(**$\_**) as a prefix.


## Getting started
----
**1. Include skydom.js in your document:**    
`<script src="skydom.js"></script>`

**2. Create variables like this:**    `var title = document.getElementById("title");`

**3. {$\_.}, That's All!**
* **$\_.text**: Get the text contents of matched elements.
`console.log($_.text(title));`

* **$\_.hasAttr**:
Determine whether the attribute is assigned to matching elements. (This will return true or false)    
`console.log($_.hasAttr(title, "class"));`

* **$\_.getAttr**: Get the value of the specified attribute of matched elements.    
`console.log($_.getAttr(title, "id"));`


### License
----
[MIT license](http://opensource.org/licenses/MIT)    
skyDom.js © 2016 Haneul Cho.

>Last Update: 12/30/2016    
To be continued...
