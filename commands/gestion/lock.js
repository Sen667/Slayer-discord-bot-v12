const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    if (!client.lockit) client.lockit = [];
    message.channel.updateOverwrite(message.guild.roles.everyone, {
        SEND_MESSAGES: false
    }).then(g => {
        g.edit({
            name: ' 🔒' + g.name
        })
        g.send(`<:Verfi2:837295104011403275> \`SUCCESS\` | Le salon a été bloqué par ${message.author}.`)
    })
   }

module.exports.help = {
    name: "lock",
    category: 'moderation',
    args: false
  };