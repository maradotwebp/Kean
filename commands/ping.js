exports.run = (bot, message, args) => {
	message.channel.send('Pong!').catch(console.error);
}