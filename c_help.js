const Discord = require('discord.js');


//Displays general help for the bot.
function showGeneralHelp(bot, user, name, pre) {
	const embed = new Discord.RichEmbed()
		.setTitle(':tools:    -- '+name+'Bot General Help --   :tools:')
		.setColor([188, 123, 55])
		.setDescription("The Bot for everything and everything else!")
		.setFooter('Thank you for using '+name+'Bot!')
		.setThumbnail(bot.user.avatarURL)
		//Help Messages
		.addField(':loudspeaker: '+pre+'announce <Message>', 'Write a message to every channel.')
		.addField(':satellite: '+pre+'stats', 'Display the stats of the bot.')
		.addField(':smiley_cat: '+pre+'userinfo', 'Display info about the command executor.');

	user.send({embed});
}

//Shows the "Not supported" help.
function notSupported(channel, pre) {
	const embed = new Discord.RichEmbed()
		.setDescription(":confused: I'm sorry, I didn't get that. Try "+pre+"help.")
		.setColor([188, 123, 55]);
	channel.send({embed});
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.showGeneralHelp = showGeneralHelp;
module.exports.notSupported = notSupported;