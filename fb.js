const axios = require('axios')
const cheerio = require('cheerio')
async function fbdl(url) {
	try {
		const result = await axios('https://x2download.com/api/ajaxSearch/facebook',{
			method: "POST",
			data: "q=" + encodeURIComponent(url)
		})
		return {
			status: true,
			author: 'Kyouka',
			result: result.data,
		}
} catch (error) {
	console.log(error)
}
}
module.exports = { fbdl }
