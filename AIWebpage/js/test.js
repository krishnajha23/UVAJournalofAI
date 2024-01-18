const axios = require('axios');
var HTMLParser = require('node-html-parser');
async function scrapeSite() {
	const url = `https://en.wikipedia.org/wiki/Main_Page`;
	const { data } = await axios.get(url);
	return data
}

scrapeSite().then(result => {
    var htmldoc = HTMLParser.parse(result);
    ptag1 = htmldoc.getElementsByTagName("p")[2]
    console.log(ptag1.toString())
	}).catch(err => console.log(err));