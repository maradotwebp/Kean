exports.run = (bot, member) => {
	let Discord = require('discord.js');
	let config = require('../config/config.json');

	const embed = new Discord.RichEmbed() 
		.setTitle(":flushed: Welcome to the server... ")
        .setDescription('May I take your order, <@'+member.id+'>?')
        .setThumbnail(member.user.displayAvatarURL)
		.setFooter(("UserID: "+member.id));
	member.guild.defaultChannel.send({embed});
}