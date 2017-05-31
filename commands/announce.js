exports.run = (bot, message, args) => {
	let Discord = require('discord.js');
	if(args.length == 0) throw err;

	for(var chan of message.guild.channels) {
		if(chan[1].type=="text") {
			const embed = new Discord.RichEmbed()
				.setAuthor(message.author.tag, message.author.displayAvatarURL)
				.setTitle(`:loudspeaker: -- ${args.join(" ")} -- :loudspeaker:`)
				.setColor([188, 123, 55]);
			chan[1].send({embed});
		}
	}
	message.delete();
}

exports.help = () => {
	return [":loudspeaker:", "announce <Message>", "Writes the Message to every channel."];
}
