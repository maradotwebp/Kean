exports.run = (bot, message, args) => {
	message.channel.send('Pong!').catch(console.error);
}

exports.help = () => {
	return [":ping_pong:", "ping", "Sends a message to the bot, verifying if he is online."];
}