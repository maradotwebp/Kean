exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
	var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`:no_entry_sign: -- No Users banned -- :no_entry_sign:`)
       .setColor([188, 123, 55]);
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle("Banlist - List of banned users.")
       .setColor([188, 123, 55]);
       for(collectionobject of collection)
       {
           var user = collectionobject[1];
           embed.addField(`:no_entry_sign: -- ${user.tag} -- :no_entry_sign:`, `-----------------------------`);
       }
       message.channel.send({embed});
     }
   });
 }
exports.help = () =>
{
	return [":no_entry_sign:", "banlist", "Displays a list of the banned users."];
}
