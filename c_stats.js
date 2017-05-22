const Discord = require('discord.js');


//Sends the stats of the bot to the channel.
function showStats(client, channel, name) {
    const embed = new Discord.RichEmbed()
        .setTitle(name+' Statistics')
        .setColor([188, 123, 55])
        .addField('Mem Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField('Users', `${client.users.size}`, true)
        .addField('Servers', `${client.guilds.size}`, true)
        .addField('Channels', `${client.channels.size}`, true)
        .addField('Version', `0.0.6`, true)
        .addField('Discord.js', `v${Discord.version}`, true);
    channel.send({embed});
}
function userinfo(channel, Discord, client){
	const embed = new Discord.RichEmbed()
        .setTitle('Kean Statistics')
        .setColor([188, 123, 55])
		.addField('Username',client.username, true)
        .addField('Joined', client.createdAt,true);
		.addField('Avatar', client.displayAvatarURL,true);
		/* 
		.createdAt -wann der User erstellt wurde
		.displayAvatarURL -gibt den Avatar mit Url zurück
		.username -string vom User
		*/
    channel.send({embed});
}
//MODULE EXPORT -- DO NOT MODIFY
<<<<<<< Updated upstream
module.exports.showStats = showStats;
=======
module.exports.sendStats = sendStats;
module.exports.userinfo = userinfo;
>>>>>>> Stashed changes
