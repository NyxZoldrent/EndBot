const path = require('node:path');
const quotesManagerPath = path.join(__dirname, '..', 'quotes-manager.js');
const { addQuote } = require(quotesManagerPath);

module.exports = {
	name: 'messageReactionAdd',
	execute(reaction, user) {
		const guildId = reaction.message.guildId;
		const userId = user.id;
		const channelId = reaction.message.channelId;
		const quote = reaction.message.content;
		const userAvatar = user.avatar;
		const timestamp = reaction.message.createdTimestamp;
		addQuote(guildId, userId, channelId, quote, userAvatar, timestamp);
		console.log(`added quote: guildId=${guildId}, userId=${userId}, channelId=${channelId}, quote=${quote}, userAvatar=${userAvatar}, timestamp=${timestamp}`);
	},
};
