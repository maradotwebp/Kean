const Discord = require('discord.js');
var Command = require('./command.js');
const client = new Discord.Client();
var name = "Kean";
var pre = "$$";

// -- GUIDE TO LOG-MESSAGES --
//INFO -- <Message>        for info and general statements
//WARNING -- <Message>     for warnings that have little to no impact
//ERROR -- <Message>       Exceptions and errors with medium impact
//CRITICAL -- <Message>    for critical Errors that could break the bot


// -- TODO --
//Permission checking not yet implemented.

//On start, logs and sets game to help info.
client.on('ready', () => {
	console.log('INFO -- '+name+' ready.');
	client.user.setGame("with $$help!");
});

//Delegates the command to command.js
client.on('message', message => {
	if(message.author.bot) return;
	if(message.content.startsWith("$$")) {
		Command.commandDelegate(message,pre, Discord, client);
	}
});

//LOGIN -- Always at end of file
client.login(process.argv[2]);