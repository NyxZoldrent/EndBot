const { SlashCommandBuilder } = require('discord.js');
const homedir = require('os').homedir();
// const fs = require('fs');

console.log(homedir);
// const rawdata = fs.readFileSync(homedir + '/endbot/quotes.json');
// const quotes = JSON.parse(rawdata);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Returns a quote from a user.'),
	async execute(interaction) {
		await interaction.reply('yes');
	},
};