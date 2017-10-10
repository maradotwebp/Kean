exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
  const fs = require('fs');

  var random;
  /*fs.readdir(`./Memes/${args[0]}/`, (err, files) =>
  {
    random = Math.random() * (files.length - 1) + 1;
  });*/


  random = Math.round(Math.random() * (40 - 1) + 1);
  console.log(random);
  console.log(`./Memes/${args[0]}/${random}.jpg`);

  fs.open(`./Memes/${args[0]}/${random}.jpg`, `r` , (err, file) =>
  {
      if(err) throw err;

      message.channel.send({files: [file]});
  });

}

exports.help = () =>
{
	return [":frame_photo:", "meme <kaindorf / classic>", "Displays a random meme of the collection kaindorf or classic."];
}
