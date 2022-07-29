module.exports = {
	name: 'messageReactionAdd',
	execute(reaction, user) {
		console.log(`User: ${user.tag} reacted to Message: ${reaction.message.content} with Emoji: ${reaction.emoji}`);
	},
};