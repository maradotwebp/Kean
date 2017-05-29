const fs = require('fs');
const Discord = require('discord.js');


/*
// ----------------
// HELP PAGE
// ----------------
// DON'T EDIT THIS CODE.
// To use the help page, 
*/
exports.run = (bot, message, args) => {
	let config = require('../config/config.json');
	var embed = new Discord.RichEmbed()
		.setTitle(`:tools:    -- ${config.name}Bot General Help --   :tools:`)
		.setColor([188, 123, 55])
		.setDescription("The Bot for everything and everything else!")
		.setFooter(`Thank you for using ${config.name}Bot!`)
		.setThumbnail(bot.user.avatarURL);
	
	fs.readdir('./commands/', (err, files) => {
  		if (err) return console.error(err);
  		files.forEach(file => {
    		let commandFunction = require(`../commands/${file}`);
    		let commandName = file.split('.')[0];
    		let array = commandFunction.help();
    		let icon = array[0];
    		let name = array[1];
    		let desc = array[2];
    		embed.addField(`${icon} ${config.prefix}${name}`, array[2]);
  		});
  		message.author.send({embed}); 
	});
}

exports.help = () => {
	return [":question:", "help", "Displays this help message."];
}