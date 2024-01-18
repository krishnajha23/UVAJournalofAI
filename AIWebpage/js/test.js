const axios = require('axios');
var HTMLParser = require('node-html-parser');
async function scrapeSite() {
	const url = `https://krishjhaxd.wordpress.com/2024/01/09/test/`;
	const { data } = await axios.get(url);
	return data
}

scrapeSite().then(result => {
    var htmldoc = HTMLParser.parse(result);
	title = htmldoc.getElementsByTagName("h2")[0].innerText;
	console.log(title);
	for(let i=0; i<htmldoc.getElementsByTagName("p").length; i++){
		console.log(htmldoc.getElementsByTagName("p")[i].innerText);
		console.log(htmldoc.getElementsByTagName("p")[i].classNames);
	}
    descripOfArticle = htmldoc.getElementsByTagName("p")[1].innerText;
	
	post3 = htmldoc.getElementsByTagName("p")[2].innerText;
	post4 = htmldoc.getElementsByTagName("p")[3].innerText;
	console.log(descripOfArticle);
    console.log(post3);
	}).catch(err => console.log(err));