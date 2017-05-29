const Discord = require('discord.js');
var Command = require('./command.js');
const bot = new Discord.Client();

//On start, logs and sets game to help info.
bot.on('ready', () => {
	console.log('INFO -- '+name+' ready.');
	bot.user.setGame("with "+pre+"help!");
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
	Command.onNewMember(member);
});

//Delegates the command to command.js
bot.on('message', message => {
	if(message.author.bot) return;
	if(message.content.startsWith(pre)) {
		Command.commandDelegate(bot, message, pre, name);
	}
});

//LOGIN -- Always at end of file
bot.login(process.argv[2]);