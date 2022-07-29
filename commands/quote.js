const { SlashCommandBuilder } = require('discord.js');
// const homedir = require('os').homedir();
// const fs = require('node:fs');
// const path = require('node:path');

// const rawpath = path.join(homedir, 'endbot');
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
