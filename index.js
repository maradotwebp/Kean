const Discord = require('discord.js');
const client = new Discord.Client();
var name = "ndBot";
var pre = "$$";

// -- GUIDE TO LOG-MESSAGES --
//INFO -- <Message>        for info and general statements
//WARNING -- <Message>     for warnings that have little to no impact
//ERROR -- <Message>       Exceptions and errors with medium impact
//CRITICAL -- <Message>    for critical Errors that could break the bot


// -- TODO --
//Permission checking not yet implemented.
//Announcement not announcing parameters.
//Change help for annoucement.
//Change general help.

client.on('ready', () => {
	console.log('INFO -- '+name+' ready.');
	client.user.setGame("with $$help!");
});



client.on('message', message => {
	var arr = message.content.split(" ");
	var command = arr[0];

	//Handler for GENERAL HELP
	if(command == pre+"help" || command == pre) {
		showGeneralHelp(message);
		return;
	}
	//Handler for ANNOUNCE
	else if(command == pre+"announce") {
		if(arr.length==1) showHelpForAnnouncement(message);
		if(arr.length>1)  doAnnouncement(message);
	}
	else if(command.startsWith(pre)) {
		notSupported(message);
	}
});





//Shows the general help for the bot.
function showGeneralHelp(message) {
	message.channel.send(":no_entry: -- **Moderation Tools**");
	message.channel.send("- $$announce");
}

//Shows the help for the announcement
function showHelpForAnnouncement(message) {
	message.channel.send(":loudspeaker: -- **$$announce** -- :loudspeaker:");
	message.channel.send("**Usage:** $$announce <Text>");
	message.channel.send("**Desc:** Writes a text to every Channel in the Guild.");
}

//Does the announcement.
function doAnnouncement(message) {
	if(!checkOnServer(message)) return;

	for(var chan of message.guild.channels) {
		var text = message.content.replace(pre+"announce ", "");
		if(chan[1].type=="text") {
			chan[1].send(":loudspeaker: "+text+" :loudspeaker:");
		}
	}
}

//Checks if this message was sent on server, and server is available.
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

function notSupported(message) {
	message.channel.send(":confused: I'm sorry, I didn't get that.");
	message.channel.send("Use **$$help** if you want some information.");
}

//LOGIN -- Always at end of file
client.login(process.argv[2]);