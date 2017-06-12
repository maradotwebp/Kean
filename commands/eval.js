exports.run = (bot, message, args) => {
  var safeEval = require('safe-eval');
  let Discord = require('discord.js');
  if(args.length == 0) throw err;
  var id = message.author.id;
  
  var safe;
  try {
    var output;
    if (id == 223321546872193024 || id == 232885456172220416 ||
    	id == 266249580058902528 || id == 310505417891381249) {
      safe = `Owner ${message.author.tag}`;
      var output = eval(args.join(" "));
    } else {
      safe = `User ${message.author.tag}`;
      var output = safeEval(args.join(" "));
    }
    outputToChannel(message, output, safe);
  } catch (err) {
    outputToChannel(message, err.message, safe);
  }
}

function outputToChannel(message, output, safe) {
  const embed = new Discord.RichEmbed()
    .setAuthor(safe, message.author.displayAvatarURL)
    .setColor([188, 123, 55])
    .addField(":inbox_tray: -- Input", "```" + args.join(" ") + "```")
    .addField(":outbox_tray: -- Output", "```" + output + "```");
  message.channel.send({embed});
  message.delete();
}

exports.help = () => {
  return [":floppy_disk:", "eval <Expression>", "Processes the Expression in Node.js."];
}
