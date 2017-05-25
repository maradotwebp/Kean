const Discord = require('discord.js');


//Does an announcement to all text based channels.
function addRole(name, guild) {
	//.setPermissions(permissions)
	//.setColor
	//.setMentionable(mentionable)?
	//.setName
	guild.createRole({
		name: 'Super Cool People',
		color: 'BLUE',
	})
	.then(role => console.log(`Created role ${role}`))
	.catch(console.error)
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.addRole = addRole;