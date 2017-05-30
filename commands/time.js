exports.run = (bot, message, args) => 
{
	const Discord = require('discord.js');
	
	var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var time = hour + ":" + min + ":" + sec;
	
	const embed = new Discord.RichEmbed() 
        .setTitle("Current Time")
        .setDescription(":timer: " + time + " :timer:")
        .setColor([188, 123, 55]);
	
	message.channel.send({embed});
}

exports.help = () => 
{
	return [":timer:", "time", "Displays the time."];
}