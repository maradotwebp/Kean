const Discord = require('discord.js');


//Sends the stats of the bot to the channel.
function showStats(bot, channel, name) {
    const embed = new Discord.RichEmbed()
        .setTitle(name+' Statistics')
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
    const embed = new Discord.RichEmbed() 
        .setTitle(name+' Statistics') 
        .setColor([188, 123, 55])
        .addField('Username', author.username, true) 
        .addField('Joined', author.createdAt, true)
        .setThumbnail(author.displayAvatarURL)
        .addField('Avatar', author.displayAvatarURL, true); 
    /*  
    .createdAt -wann der User erstellt wurde 
    .displayAvatarURL -gibt den Avatar mit Url zurück 
    .username -string vom User 
    */ 
    channel.send({embed}); 
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.showStats = showStats;
module.exports.userInfo = userInfo;