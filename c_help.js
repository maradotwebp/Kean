//Shows the general help for the bot.
function showGeneralHelp(channel) {
	channel.send(":no_entry: -- **Moderation Tools**");
	channel.send(" $$announce <Text> - Write to every channel.");
}

//Shows the "Not supported" help.
function notSupported(channel) {
	channel.send(":confused: I'm sorry, I didn't get that. Try $$help.");
}

module.exports.showGeneralHelp = showGeneralHelp;
module.exports.notSupported = notSupported;