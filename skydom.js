/*!
 * SkyDom.js
 * @version v0.0.0
 * @link https://github.com/haneulcho/sky-dom-js
 * @license MIT (http://opensource.org/licenses/MIT)
 * @copyright (c) 12/30/2016 Haneul Cho (http://josky.net)
 */

(function(global) {
  'use strict';

  var skyDom = {};

  skyDom = {
    text: function(el) {
      var t = '';
      el = el.childNodes || el;

      for (var i=0; i<el.length; i++) {
        t += el[i].nodeType !=1 ? el[i].nodeValue : this.text(el[i].childNodes);
      }

      return t;
    },
    hasAttr: function(el, name) {
      return el.getAttribute(name) != null;
    },
    getAttr: function(el, name) {
      if (!name || name.constructor != String) return '';
      name = {'for': 'htmlFor', 'className': 'class'}[name] || name;

      return el[name];
    }
  }

  if (typeof module != 'undefined' && module.exports) {
    module.exports = skyDom;
  } else if (typeof define === "function" && define.amd) {
    define("skyDom", [], function() {
      return skyDom;
    });
  } else {
    global.$_ = skyDom;
  }

})(this);
