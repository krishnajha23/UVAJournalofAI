const axios = require('axios');

async function scrapeSite(keyword) {
	const url = `https://www.google.com/search?q=${keyword}&tbm=isch`;
	const { data } = await axios.get(url);
	return data
}

const keyword = "coffee"; // change with any keyword you want
scrapeSite(keyword).then(result => {
	console.log(result)
	}).catch(err => console.log(err));