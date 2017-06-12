# Kean [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![codebeat badge](https://codebeat.co/badges/a2c92d65-be52-4f08-bec4-4644087f6831)](https://codebeat.co/projects/github-com-froehlicha-kean-master)
A Discord bot, providing various features to users. Uses [Discord.js](https://github.com/hydrabolt/discord.js).

## Features
This bot has the following commands available:
```
$$announce - Write a message to every channel on the server.
$$eval - Execute JS Code in Discord.
$$help - Get a neat little help page.
$$ping - Ping the bot. Used for testing purposes.
$$stats - Display stats about the bot.
$$userinfo - Get info about yourself.
$$vote - Create a vote.
```
Additionally, there are also the following features:
```
Displays a Hello message when a new user joins.
```

## How to use
1. Download source files.
2. Create a new file called ```Token.json``` in the ```/config``` folder. The file path should now be ```/config/Token.json```.
3. Drop this code in there:
```
{
    "token": "YOUR-BOT-TOKEN"
}
```
4. Replace YOUR-BOT-TOKEN with your application token. You can create a application [here](https://discordapp.com/developers/applications/me).
5. Download [node.js](https://nodejs.org/en/download/).
6. Open the node.js Command Shell and navigate to the project folder.
7. Enter the command ```node index.js```.
