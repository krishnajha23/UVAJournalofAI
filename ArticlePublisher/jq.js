<<<<<<< Updated upstream
var DOMParser = require('xmldom').DOMParser;
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        //this.response is what you're looking for
        var text = xhr.responseText;
        //console.log(text);
        //var text2 = xhr.responseXML;
        //console.log(text2);
        //console.log(text);
        //console.log(text);
        var xmldoc = new DOMParser().parseFromString(xhr.responseText,'application/xhtml+xml');
        //console.log(xmldoc);
        var locs = xmldoc.getElementsByTagName("loc");
        console.log(locs[0].toString());
        for(let i=0; i<locs.length; i++){
            xhr2.open('GET', String(locs[i].textContent));
            xhr2.send();
        }
        //var img = document.getElementById('img');
        //var url = window.URL || window.webkitURL;
        //img.src = url.createObjectURL(this.response);
    }
}
xhr2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var text2 = xhr2.responseText;
        //console.log(text2);
        const parser = new DOMParser();
        var htmlDoc = parser.parseFromString(text2, 'text/html'); //doesn't work*****
        //var title = htmlDoc.getElementsByTagName("h2")[0];
        //console.log(title);
        var articleDescription = htmlDoc.getElementsByTagName("p")[0];
        console.log(articleDescription);
        //var publicationDate = htmlDoc.getElementsByTagName("time")[0];
    }
}
xhr.open('GET', 'https://krishjhaxd.wordpress.com/sitemap.xml');
xhr.send(); 
var parser, xmlDoc;
var text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";
//parser = new DOMParser();
//xmlDoc = parser.parseFromString(text,"text/xml");
=======
var DOMParser = require('xmldom').DOMParser;
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
var xhr2 = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        //this.response is what you're looking for
        var text = xhr.responseText;
        //console.log(text);
        //var text2 = xhr.responseXML;
        //console.log(text2);
        //console.log(text);
        //console.log(text);
        var xmldoc = new DOMParser().parseFromString(xhr.responseText,'application/xhtml+xml');
        //console.log(xmldoc);
        var locs = xmldoc.getElementsByTagName("loc");
        console.log(locs[0].toString());
        for(let i=0; i<locs.length; i++){
            xhr2.open('GET', String(locs[i].textContent));
            xhr2.send();
        }
        //var img = document.getElementById('img');
        //var url = window.URL || window.webkitURL;
        //img.src = url.createObjectURL(this.response);
    }
}
xhr2.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var text2 = xhr2.responseText;
        //console.log(text2);
        const parser = new DOMParser();
        var htmlDoc = parser.parseFromString(text2, 'text/html'); //doesn't work*****
        //var title = htmlDoc.getElementsByTagName("h2")[0];
        //console.log(title);
        var articleDescription = htmlDoc.getElementsByTagName("p")[0];
        console.log(articleDescription);
        //var publicationDate = htmlDoc.getElementsByTagName("time")[0];
    }
}
xhr.open('GET', 'https://krishjhaxd.wordpress.com/sitemap.xml');
xhr.send(); 
var parser, xmlDoc;
var text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";
//parser = new DOMParser();
//xmlDoc = parser.parseFromString(text,"text/xml");
>>>>>>> Stashed changes
