exports.run = (bot, message, args) => {
	let Discord = require('discord.js');
	if(args.length == 0) throw err;
	const embed = new Discord.RichEmbed()
        .setTitle(`:interrobang: -- ${args.join(" ")} -- :interrobang: `)
				.setAuthor(message.author.tag, message.author.displayAvatarURL)
        .setColor([188, 123, 55]);
    var usersReacted;
    message.channel.send({embed})
    	.then((votemsg) => {
    		message.delete();
    		votemsg.react("⬆");
    		votemsg.react("⬇");
    	});

}

exports.help = () => {
	return [":arrow_up:", "vote <Message>", "Creates a vote for the Message."];
}
