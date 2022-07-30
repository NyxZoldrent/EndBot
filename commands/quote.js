const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const path = require('node:path');
const { client } = require(path.join(__dirname, '..', 'index.js'));
const { getRandomQuote } = require(path.join(__dirname, '..', 'quotes-manager.js'));

function createQuoteEmbed(quoteObj) {
	if (!client.users.cache.has(quoteObj.user)) {
		client.users.cache.get(quoteObj.user).name;
	}
	// const member = client.guilds.fetch(quoteObj.user);
	// const memberName = member.nickname ? member.nickname : member.user.tag;
	const memberName = client.users.cache.get(quoteObj.user).username;
	// const timestamp = `<t:${quoteObj.timestamp}:f>`;
	const embed = new EmbedBuilder()
		.setColor(0xFF0000)
		.setTitle('A quote')
		.setAuthor({ name: `${memberName}`, iconURL: `https://cdn.discordapp.com/avatars/${quoteObj.user}/${quoteObj.userAvatar}.png` })
		.setDescription(`${quoteObj.quote} - <#${quoteObj.channel}>`)
		.setFooter({ text: `QuoteID: ${quoteObj.quoteId} Timestamp: <t:${quoteObj.timestamp}:f>` });
	return embed;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Returns a quote from a user.'),
	async execute(interaction) {
		const randomQuote = getRandomQuote(interaction.guildId);
		const embed = createQuoteEmbed(randomQuote);
		await interaction.reply({ embeds: [embed] });
	},
};
