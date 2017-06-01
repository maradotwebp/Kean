const fs = require('fs');
const Discord = require('discord.js');
let config = require('./config/config.json');


/*

// ----------------
// KEANBOT V0.6
// ----------------
// Made by Alexander Fröhlich, Karl Backhaus, Manuel Yecla, and Philipp Skledar
// ----------------
// For the license, see the LICENSE.md.
// For information about the bot, see README.md.
// For other help, please message one of the four authors over Github.


// INFO FOR THE TEAM BELOW
// Please. for fucks sake. Change nothing in this file.


// ----------------
// HOW TO ADD A NEW COMMAND
// ----------------
//	1. Go to the /commands/ folder and create a file called {name}.js (Replace "name" with your command)
//	2. Add this code to the file:
		exports.run = (bot, message, args) => {
			//Your code here
	    }
//	3. Write your code!
//	4. Don't forget to add the documentation. Copy this code and change it:
		exports.help = () => {
			return ["EMOJI", "NAME WITH PARAMETERS", "DESCRIPTION"];
		}


// ----------------
// HOW TO ADD A NEW EVENT
// ----------------
//	1. Go to the /events/ folder and create a file called {name}.js (Replace "name" with your command)
//	2. Add this code to the file:
		exports.run = (bot, [additional Parameters for the Event]) => {
			//Your code here
	    }
//	3. Write your code!
*/

const bot = new Discord.Client();

//Delegate all events to the appropiate file in the /events/ folder.
fs.readdir('./events/', (err, files) => {
  	if (err) return console.error(err);
  	files.forEach(file => {
    	let eventFunction = require(`./events/${file}`);
    	let eventName = file.split('.')[0];
    	bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  	});
});

//Delegate all commands to the appropiate file in the /commands/ folder.
bot.on('message', message => {
	if(message.author.bot) return; // Return if author is bot
	if (!message.content.startsWith(config.prefix)) return; // Return if message doesn't start with prefix

	let command = message.content.split(' ')[0];
  	command = command.slice(config.prefix.length);
  	let args = message.content.split(' ').slice(1);
  	try {
    	let commandFile = require(`./commands/${command}.js`);
    	commandFile.run(bot, message, args);
  	} catch (err) {
  		console.error(err);
  		const embed = new Discord.RichEmbed()
			.setDescription(`:confused: I'm sorry, I didn't get that. Try ${config.prefix}help.`)
			.setColor([188, 123, 55]);
		message.channel.send({embed});
  	}
});

//LOGIN WITH BOT TOKEN
bot.login(config.token);
