const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return;

        if (!client.lockit) client.lockit = [];

        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: null
        }).then(g => {
            g.edit({
                name: g.name.replace(/\s*🔒/, '')
            })
            g.send(`<:Verfi2:837295104011403275> \`SUCCESS\` |  Salon déverrouillé avec succès.`)

        })
}
module.exports.help = {
    name: "unlock",
    category: 'moderation',
    args: false
  };