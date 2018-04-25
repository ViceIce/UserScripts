(function () {
    "use strict";
    
// ==UserScript==
// @name        MS Redirection Helper
// @author      Michael Kriese
// @namespace   https://github.com/ViceIce/UserScripts
// @version     0.6
// @description MS Redirection Helper
// @copyright   2018 Michael Kriese
// @run-at      document-start
// @grant       none
//
// @updateURL   https://raw.githubusercontent.com/ViceIce/UserScripts/master/MS.RedirectionHelper.js
// @installURL  https://raw.githubusercontent.com/ViceIce/UserScripts/master/MS.RedirectionHelper.js
// @downloadURL https://raw.githubusercontent.com/ViceIce/UserScripts/master/MS.RedirectionHelper.js
//
// @include     http://msdn.microsoft.com/*
// @include     https://msdn.microsoft.com/*
// @include     http://technet.microsoft.com/*
// @include     https://technet.microsoft.com/*
// @include     https://docs.microsoft.com/*
// ==/UserScript==

    var path = location.pathname;
    
    if (path.match(/^\/\w{2}-\w{2}\//gi) && ! path.match(/^\/en-us\//gi)){
        var uri = location.href;
        uri = uri.replace(/\/\w{2}-\w{2}\//gi, "/en-us/");
        location.href = uri;
    }
})();
