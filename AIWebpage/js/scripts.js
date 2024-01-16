/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Change color of link on Contact Us from white to gray while hovering.
const axios = require('axios');
const cheerio = require('cheerio');
var DOMParser = require('xmldom').DOMParser;
var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var xmldoc = new DOMParser().parseFromString(xhr.responseText,'text/xml');
        var imgs = xmldoc.getElementsByTagName("image:loc");
        var locs = xmldoc.getElementsByTagName("loc");
        const links = [];
        const imglinks = [];
        for (let i = 0; i < locs.length; i++) {
            var loc = locs[i].childNodes[0];
            var link = loc.nodeValue;
            links.push(link)
        }
        for (let i = 0; i < locs.length; i++) {
            imglinks.push(imgs[0].childNodes[0].nodeValue)
        }
        console.log(links)
        //const axiosResponse = axios.request({
        //    method: "GET",
        //    url: link,
        //})
        //console.log(axiosResponse.data)
    }
}
xhr.open('GET', 'https://krishjhaxd.wordpress.com/sitemap.xml');
xhr.send(); 