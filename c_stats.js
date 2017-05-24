const Discord = require('discord.js');


//Sends the stats of the bot to the channel.
function showStats(bot, channel, name) {
    const embed = new Discord.RichEmbed()
        .setTitle(name+' Statistics')
        .setDescription("Warning: Information might be slightly inaccurate.")
        .setColor([188, 123, 55])
        .addField('Mem Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField('Users', `${bot.users.size}`, true)
        .addField('Servers', `${bot.guilds.size}`, true)
        .addField('Channels', `${bot.channels.size}`, true)
        .addField('Version', `0.0.6`, true)
        .addField('Discord.js', `v${Discord.version}`, true);
    channel.send({embed});
}

//Displays the stats of the user.
function userInfo(author, channel, name){
    var info = author.presence;

    const embed = new Discord.RichEmbed() 
        .setTitle(":grinning: "+author.tag)
        .setDescription(author.username + " is in "+info.status+" mode.")
        .setColor([188, 123, 55])
        .setThumbnail(author.displayAvatarURL)
        .addField('Joined Discord on', author.createdAt.toDateString(), true);
		
    var guildmember = channel.guild.fetchMember(author).then(function(member) {
        embed.addField('Joined '+member.guild.name+' on', member.joinedAt.toDateString(),true);
        embed.addField('Avatar', author.displayAvatarURL);
		embed.setFooter(("UserID: "+author.id));
        channel.send({embed});
		
    });
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.showStats = showStats;
module.exports.userInfo = userInfo;