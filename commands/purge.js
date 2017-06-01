exports.run = (bot, message, args) => {
  let Discord = require('discord.js');
  if(args.length != 2) throw err;
  if(args[1] > 100) throw err;
  message.channel.fetchMessages({limit: args[1]})
  .then(collection => {
    var count = 0;

    for(collectionObject of collection) {
      let message = collectionObject[1];
      if(message.author.username == args[0] || message.author.tag == args[0]) {
        message.delete();
        count++;
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle(`:x: The last ${count} messages of User ${args[0]} have been deleted.`)
  		.setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setColor([188, 123, 55]);
    message.channel.send({embed});
    message.delete();
  })
  .catch(console.error);
}

exports.help = () => {
  return [":x:", "purge <Name> <Count>", "Purges all messages in a channel of a given name (Up to 100 Messages)."];
}
