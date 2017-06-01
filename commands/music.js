exports.run = (bot, message, args) => 
{
	//let queue = {};
 
	switch(args[0])
	{
		case 'play': play();
		case 'join': join(message);
	}
}

function play()
{
	
}

function join(message)
{
    console.log("joined function");
	const channel = message.member.voiceChannel;
	channel.join().then(connection => console.log('Connected!')).catch(console.error);
}


exports.help = () => 
{
	return [":musical_note:", "music", "Music Player."];
}