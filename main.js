const Eris = require("eris");

//BOT CREATION
var bot = new Eris.CommandClient(process.argv[2], {}, {
  name: "ndBot V1.0",
  description: "A simple testing bot!",
  owner: "BestInPiece",
  prefix: "$$"
});
bot.on("ready", () => { console.log("Ready!"); });
bot.connect();

// BOT COMMAND REGISTER
