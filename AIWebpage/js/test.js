const axios = require('axios');

async function scrapeSite() {
	const url = `https://krishjhaxd.wordpress.com/2023/12/29/the-art-of-connection/`;
	const { data } = await axios.get(url);
	return data
}

scrapeSite().then(result => {
	console.log(result)
	}).catch(err => console.log(err));