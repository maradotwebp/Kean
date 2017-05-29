exports.run = (bot, message, args) => {
	var safeEval = require('safe-eval');
	let Discord = require('discord.js');
	var id = message.author.id;
	var output;
	var safe;
	try {
		if(id == 223321546872193024 || id == 232885456172220416 ||
	   	   id == 266249580058902528 || id == 310505417891381249) {
			safe = `(for Owner ${message.author.username})`;
			var output = eval(args.join(" "));
		} else {
			safe = `(for User ${message.author.username})`;
			var output = safeEval(args.join(" "));
		}
		const embed = new Discord.RichEmbed()
        	.setTitle(`Evaluation ${safe}`)
        	.setColor([188, 123, 55])
        	.addField(":inbox_tray: -- Input", "```"+args.join(" ")+"```")
        	.addField(":outbox_tray: -- Output", "```"+output+"```");
    	message.channel.send({embed});
	} catch(err) {
		const embed = new Discord.RichEmbed()
        	.setTitle(`Evaluation ${safe}`)
        	.setColor([188, 123, 55])
        	.addField(":inbox_tray: -- Input", "```"+args.join(" ")+"```")
        	.addField(":outbox_tray: -- Output", "```"+err.message+"```");
    	message.channel.send({embed});
	}
	
}

exports.help = () => {
	return [":floppy_disk:", "eval <Expression>", "Processes the Expression in Node.js."];
}