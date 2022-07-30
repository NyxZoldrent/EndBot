const homedir = require('os').homedir();
const fs = require('node:fs');
const path = require('node:path');

function getQuotesFilePath() {
	const dirPath = path.join(homedir, 'endbot');
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath);
	}

	const filePath = path.join(dirPath, 'quotes.json');
	if (!fs.existsSync(filePath)) {
		fs.writeFileSync(filePath, '{}');
	}
	return filePath;
}

function makeid(length) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;

	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

let quotes = {};

function createQuoteObject(guildId, channelId, userId, userAvatar, quoteId, timestamp, quote) {
	return {
		guild: guildId,
		channel: channelId,
		user: userId,
		userAvatar: userAvatar,
		quoteId: quoteId,
		timestamp: timestamp,
		quote: quote,
	};
}

function loadQuotes() {
	const filePath = getQuotesFilePath();
	const rawData = fs.readFileSync(filePath);
	quotes = JSON.parse(rawData);
}

function saveQuotes(quoteObj) {
	const data = JSON.stringify(quoteObj, null, 4);
	const filePath = getQuotesFilePath();
	fs.writeFileSync(filePath, data);
}

/**
 * Adds a quote for later use
 * @param {snowflake} guildId - the ID of the guild the quote is in
 * @param {snowflake} userId - the ID of the person being quoted
 * @param {snowflake} channelId - the ID of the channel the quote is in
 * @param {string} content - the text being quoted
 */
function addQuote(guildId, userId, channelId, content, userAvatar, timestamp) {
	const id = makeid(8);

	if (!Object.hasOwn(quotes, guildId)) {
		quotes[guildId] = [];
	}

	quotes[guildId].push(createQuoteObject(guildId, channelId, userId, userAvatar, id, timestamp, content));

	saveQuotes(quotes);
}

function getRandomQuote(guildId) {
	const guildQuotes = quotes[guildId];
	const randomQuote = guildQuotes[Math.floor(Math.random() * guildQuotes.length)];

	return randomQuote;
}

module.exports = {
	loadQuotes: loadQuotes,
	addQuote: addQuote,
	getRandomQuote: getRandomQuote,
};
