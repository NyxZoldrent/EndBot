const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qupte')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('this is a quote');
	},
};