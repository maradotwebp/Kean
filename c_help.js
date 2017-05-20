//Shows the general help for the bot.

//Displays general help
function showGeneralHelp(message, Discord, client) {
	const embed = new Discord.RichEmbed()
		.setTitle(':tools:    -- Kean General Help --   :tools:')
		.setColor([188, 123, 55])
		.setDescription("The Bot for everything and everything else!")
		.setFooter('Thank you for using KeanBot!')
		.setThumbnail(client.user.avatarURL)
		//Help Messages
		.addField(':loudspeaker: $$announce', 'Writes a message to every channel.')
		.addField(':busts_in_silhouette: $$stats', 'Displays the stats of the user.');
	message.channel.send({embed});
}

//Shows the "Not supported" help.
function notSupported(channel) {
	channel.send(":confused: I'm sorry, I didn't get that. Try $$help.");
}

module.exports.showGeneralHelp = showGeneralHelp;
module.exports.notSupported = notSupported;