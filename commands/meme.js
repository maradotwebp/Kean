exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
  const fs = require('fs');

  var random;
  fs.readdir(`./Memes/${args[0]}/`, (err, files) => {
    random = Math.random() * (files.length - 1) + 1;
  });

  fs.readFile(`./Memes/${args[0]}/${random}.jpeg`, (err, data) =>
  {
      if(err) throw err;

  }


 }



exports.help = () =>
{
	return [":frame_photo:", "meme <kaindorf / classic>", "Displays a random meme of the collection kaindorf or classic."];
}
