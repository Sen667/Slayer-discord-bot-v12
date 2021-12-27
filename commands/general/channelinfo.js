const Discord = require('discord.js');

exports.run = (client, message, args) => {
    message.delete()

    var channel_info = new Discord.MessageEmbed()
        .setTitle("📌 Informations sur ce channel:")
        .addField("📝 Nom du channel:", "<#" + message.channel.id + ">", true)
        .addField("🔗 ID du channel:", message.channel.id, true)
        .addField("📋 Type de channel :", message.channel.type, true)
        .addField("📅 Date de création du channel :", message.channel.createdAt, true)
        
        .setColor("#00FFFF")
    message.channel.send(channel_info)
}

module.exports.help = {
    name: "channelinfo"
}