exports.run = (bot, member) =>
{
	let Discord = require('discord.js');
	let config = require('../config/config.json');

	const embed = new Discord.RichEmbed()
		.setTitle(":wave: " + member.user.username + " just discordnected.")
    .setDescription('He died for our sins, RIP <@'+member.id+'>')
    .setThumbnail(member.user.displayAvatarURL)
		.setFooter(("UserID: "+member.id));
	member.guild.defaultChannel.send({embed});
}
