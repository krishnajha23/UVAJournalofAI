const axios = require('axios');
var HTMLParser = require('node-html-parser');
async function scrapeSite() {
	const url = `https://krishjhaxd.wordpress.com/2023/12/29/beyond-the-obstacle/`;
	const { data } = await axios.get(url);
	return data
}

scrapeSite().then(result => {
    var htmldoc = HTMLParser.parse(result)
    post1 = htmldoc.getElementsByTagName("p")[2].innerText
    console.log(post1)
	}).catch(err => console.log(err));