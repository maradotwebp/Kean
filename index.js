const Discord = require('discord.js');
const client = new Discord.Client();
var name = "ndBot";
var prefix = "$$";

client.on('ready', () => { console.log(name+'ready.'); });

//LOGIN -- Always at end of file
client.login(process.argv[2]);