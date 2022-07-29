const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const { locality, commandId } = process.argv.slice(2);

const rest = new REST({ version: '10' }).setToken(token);


if (locality === 'guild') {
	// guild commands
	rest.delete(Routes.applicationGuildCommand(clientId, guildId, commandId))
		.then(() => console.log('Successfully delete guild command'))
		.catch(console.error);
} else if (locality === 'global') {
	// global commands
	rest.delete(Routes.applicationCommands(clientId, commandId))
		.then(() => console.log('Successfully deleted application command'))
		.catch(console.error);
}
