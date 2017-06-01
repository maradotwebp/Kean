exports.run = (bot, message, args) => {
	let Discord = require('discord.js');
	let config = require('../config/config.json');
    var info = message.author.presence;

    const embed = new Discord.RichEmbed()
        .setTitle(":grinning: "+message.author.tag)
        .setDescription(message.author.username + " is in "+info.status+" mode.")
        .setColor([188, 123, 55])
        .setThumbnail(message.author.displayAvatarURL)
        .addField('Joined Discord on', message.author.createdAt.toDateString(), true);

    var guildmember = message.channel.guild.fetchMember(message.author).then(function(member) {
        embed.addField(`Joined ${member.guild.name} on`, member.joinedAt.toDateString(),true);
        embed.addField('Avatar', message.author.displayAvatarURL);
        embed.setFooter(("UserID: "+message.author.id));
        message.channel.send({embed});
				message.delete();
    });
}

exports.help = () => {
	return [":grinning:", "userinfo", "Displays info about you."];
}
