//Does an announcement to all text based channels.
function doAnnouncement(channel, text) {
	for(var chan of channel.guild.channels) {
		if(chan[1].type=="text") {
			chan[1].send(":loudspeaker: "+text+" :loudspeaker:");
		}
	}
}

//MODULE EXPORT -- DO NOT MODIFY
module.exports.doAnnouncement = doAnnouncement;