const Discord = require('discord.js');
var Command = require('./command.js');
const bot = new Discord.Client();
var name = "Rem";
var pre = "$$";



// -- GUIDE TO LOG-MESSAGES --
//INFO -- <Message>        for info and general statements
//WARNING -- <Message>     for warnings that have little to no impact
//ERROR -- <Message>       Exceptions and errors with medium impact
//CRITICAL -- <Message>    for critical Errors that could break the bot


// -- TODO --
//Permission checking not yet implemented.

//On start, logs and sets game to help info.
bot.on('ready', () => {
	console.log('INFO -- '+name+' ready.');
	bot.user.setGame("with "+pre+"help!");
});

// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
const embed = new Discord.RichEmbed() 
		.setTitle(":flushed: Welcome to the server... ")
        .setDescription('May I take your order, '+member.user.username+'?')
        .setThumbnail(member.user.displayAvatarURL)
		.setFooter(("UserID: "+member.id));
		member.guild.defaultChannel.send({embed});
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