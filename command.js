var Help = require('./c_help.js');
var Announce = require('./c_announce.js')

//Splits the command and delegates to further methods.
function commandDelegate(message, pre, Discord, client) {
	if(!checkOnServer(message, Discord)) return;
	var arg = message.content.split(" ");
	var command = arg[0].replace(pre, "");
	arg.shift();

	//COMMAND SWITCH
	switch(command) {
		case "help":
			Help.showGeneralHelp(message, Discord, client);
			break;
		case "announce":
			if(arg.length>0) Announce.doAnnouncement(message, arg.join(" "));
			if(arg.length==0) Help.notSupported(message.channel);
			break;
		default:
			Help.notSupported(message.channel);
			break;
	}
}

//Checks if the command is done on Server.
function checkOnServer(message, Discord) {
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

module.exports.commandDelegate = commandDelegate;