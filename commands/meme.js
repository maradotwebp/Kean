exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
  const fs = require('fs');
  var lwip = require('lwip');

  var random;
  fs.readdir(`./Memes/${args[0]}/`, (err, files) =>
  {
    random = Math.random() * (files.length - 1) + 1;
  });

  lwip.open(`./Memes/${args[0]}/${random}.jpg`, function(err, image)
  {
      if(err) throw err;
      message.channel.send(image);
  });

}



exports.help = () =>
{
	return [":frame_photo:", "meme <kaindorf / classic>", "Displays a random meme of the collection kaindorf or classic."];
}
