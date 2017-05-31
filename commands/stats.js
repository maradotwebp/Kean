exports.run = (bot, message, args) => {
	let Discord = require('discord.js');
	let config = require('../config/config.json');

	const embed = new Discord.RichEmbed()
        .setTitle(`${config.name}Bot Statistics`)
				.setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setDescription("Warning: Information might be slightly inaccurate.")
        .setColor([188, 123, 55])
        .addField('Mem Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField('Users', `${bot.users.size}`, true)
        .addField('Servers', `${bot.guilds.size}`, true)
        .addField('Channels', `${bot.channels.size}`, true)
        .addField('Version', `0.6`, true)
        .addField('Discord.js', `v${Discord.version}`, true);
    message.channel.send({embed});
		message.delete();
}

exports.help = () => {
	return [":satellite:", "stats", "Displays the stats of the bot."];
}
