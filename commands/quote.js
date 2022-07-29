const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Returns a quote from a user.'),
	async execute(interaction) {
		await interaction.reply('yes');
	},
};
