function sendStats(channel, Discord, client) {
    const embed = new Discord.RichEmbed()
        .setTitle('Kean Statistics')
        .setColor([188, 123, 55])
        .addField('Mem Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
        .addField('Users', `${client.users.size}`, true)
        .addField('Servers', `${client.guilds.size}`, true)
        .addField('Channels', `${client.channels.size}`, true)
        .addField('Version', `0.0.6`, true)
        .addField('Discord.js', `v${Discord.version}`, true);
    channel.send({embed});
}

module.exports.sendStats = sendStats;
