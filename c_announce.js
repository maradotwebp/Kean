const Discord = require('discord.js');


//Does an announcement to all text based channels.
function doAnnouncement(channel, text) {
	for(var chan of channel.guild.channels) {
		if(chan[1].type=="text") {
			const embed = new Discord.RichEmbed()
				.setTitle(":loudspeaker: -- "+text+"-- :loudspeaker:")
				.setColor([188, 123, 55]);
			chan[1].send({embed});
		}
	}
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.doAnnouncement = doAnnouncement;