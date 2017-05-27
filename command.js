var Help = require('./c_help.js');
var Announce = require('./c_announce.js');
var Stats = require('./c_stats.js');
var Role = require('./c_role.js');
const Discord = require('discord.js');


//Splits the command and delegates to further methods.
function commandDelegate(bot, message, pre, name) {
	var arg = message.content.split(" ");
	var command = arg[0].replace(pre, "");
	message.reply(arg);
	message.reply(command);
	arg.shift();

	//COMMAND SWITCH
	switch(command) {
		case "help":
			Help.showGeneralHelp(bot, message.author, name, pre);
			break;
		case "stats":
			Stats.showStats(bot, message.channel, name);
			break;
		case "announce":
			if(!checkOnServer(message)) return;
			if(arg.length>0) Announce.doAnnouncement(message.channel.guild, arg.join(" "));
			if(arg.length==0) Help.notSupported(message.channel);
			break;
		case "userinfo":
			Stats.userInfo(message.author, message.channel, name);
			break;
		case "createrole":
		var modrole1 = message.guild.roles.find("name", "mod");
		var modrole2 = message.guild.roles.find("name", "admin");
		if(message.member.roles.has(modrole1.id) || message.member.roles.has(modrole2.id)){
			var text = message.content.startsWith(" ");
			text = "";
			message.reply(text);
			Role.addRole(text, message.guild);
		} else {
			message.reply("Sorry! You don't have the permission to use this command!");
		}
		break;
		default:
			Help.notSupported(message.channel, pre);
			break;
	}
}

//Checks if the command is done on Server.
function checkOnServer(message) {
	var guild = message.guild;
	if(!(guild instanceof Discord.Guild)) {
		message.channel.send("I'm sorry, you are not on a Server!");
		return false;

	}
	if(!guild.available) {
		message.channel.send("Sorry, the guild seems to be unavailable!");
		return false;
	}
	return true;
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.commandDelegate = commandDelegate;