const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.delete()

    var channel_info = new Discord.MessageEmbed()
        .setTitle("π Informations sur ce channel:")
        .addField("π Nom du channel:", "<#" + message.channel.id + ">", true)
        .addField("π ID du channel:", message.channel.id, true)
        .addField("π Type de channel :", message.channel.type, true)
        .addField("π Date de crΓ©ation du channel :", message.channel.createdAt, true)
        
        .setColor("#00FFFF")
    message.channel.send(channel_info)
}

module.exports.help = {
    name: "channelinfo"
}