exports.run = (bot, message, args) => 
{
	let queue = {};
 
	switch(args[0])
	{
		case 'play': play();
		case 'join': join(message);
	}
}

function play()
{
	
}

function join(var message)
{
	message.channel
}


exports.help = () => 
{
	return [":musical_note:", "time", "Displays the time."];
}