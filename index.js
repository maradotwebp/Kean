const Discord = require('discord.js');
const client = new Discord.Client();
var name = "ndBot";
var prefix = "$$";

//Guide to Log-Messages
//INFO -- <Message>        for info and general statements
//WARNING -- <Message>     for warnings that have little to no impact
//ERROR -- <Message>       Exceptions and errors with medium impact
//CRITICAL -- <Message>    for critical Errors that could break the bot

// -- TODO --
//Permission checking not yet implemented.
//Announcement not announcing parameters.
//Change help for annoucement.
//Change general help.
//Announcement not working, but no error in console.

client.on('ready', () => { console.log('INFO -- '+name+' ready.'); });

//LOGIN -- Always at end of file
client.login(process.argv[2]);