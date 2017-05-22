const Discord = require('discord.js');


//Displays general help for the bot.
function showGeneralHelp(client, channel, name) {
	const embed = new Discord.RichEmbed()
		.setTitle(':tools:    -- '+name+'Bot General Help --   :tools:')
		.setColor([188, 123, 55])
		.setDescription("The Bot for everything and everything else!")
		.setFooter('Thank you for using '+name+'Bot!')
		.setThumbnail(client.user.avatarURL)
		//Help Messages
		.addField(':loudspeaker: $$announce <Message>', 'Writes a message to every channel.')
		.addField(':busts_in_silhouette: $$stats', 'Displays the stats of the user.');
	channel.send({embed});
}

//Shows the "Not supported" help.
function notSupported(channel) {
	channel.send(":confused: I'm sorry, I didn't get that. Try $$help.");
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.showGeneralHelp = showGeneralHelp;
module.exports.notSupported = notSupported;