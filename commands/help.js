/*
// ----------------
// HELP PAGE
// ----------------
// DON'T EDIT THIS CODE.
// To use the help page, code the method .help() as seen below,
// and return an array with icon, name, and description.
*/

exports.run = (bot, message, args) => {
	let fs = require('fs');
	let Discord = require('discord.js');
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
    	try {
    		let array = commandFunction.help();
    		let icon = array[0];
    		let name = array[1];
    		let desc = array[2];
    		embed.addField(`${icon} ${config.prefix}${name}`, array[2]);
    	} catch(err) {
    		embed.addField(`$commandName`, 'No Documentation set.');
    	}
  	});
  	message.author.send({embed});
		message.delete();
	});
}

exports.help = () => {
	return [":question:", "help", "Displays this help message."];
}
