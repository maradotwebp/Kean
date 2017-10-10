exports.run = (bot, message, args) => {
  let Discord = require('discord.js');
  if(args.length != 2) throw err("-- WARNING -- Arg.length wrong.");
  if(args[0] > 100) throw err("-- WARNING -- Tried to delete more than 100 messages.");
  message.channel.fetchMessages({limit: args[0]})
  .then((collection) => {
    var count = 0;

    if(message.mentions.everyone) {
      for(collectionObject of collection) {
        let msg = collectionObject[1];
        msg.delete();
        count++;
      }
    } else {
      for(userObject of message.mentions.users) {
        var user = userObject[1];
        for(collectionObject of collection) {
          let msg = collectionObject[1];
          if(msg.author == user) {
            msg.delete();
            count++;
          }
        }
      }
    }
    const embed = new Discord.RichEmbed()
      .setTitle(`:x: ${count} messages have been deleted.`)
      .setThumbnail("http://i.imgur.com/UvIzO90.jpg")
  		.setAuthor(message.author.tag, message.author.displayAvatarURL)
      .setColor([188, 123, 55]);
    message.channel.send({embed});
    message.delete();
  })
  .catch(console.error);
}

exports.help = () => {
  return [":x:", "purge <Count> <Mentions>", "Purges all messages in a channel of given Mentions (Up to 100 Messages)."];
}
