exports.run = (bot) => {
	let config = require('../config/config.json');

	console.log(`${config.name}Bot is ready.`);
	console.log(`Ready to run in ${bot.channels.size} channels on ${bot.guilds.size} servers, for a total of ${bot.users.size} users.`);
}