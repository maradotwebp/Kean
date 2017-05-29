exports.run = (bot) => {
	let config = require('../config/config.json');

	console.log(`${config.name}Bot is ready.`);
	console.log(`Ready to run in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
}