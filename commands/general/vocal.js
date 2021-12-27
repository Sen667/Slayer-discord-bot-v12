const Discord = require ('discord.js')
module.exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.send(`Membre en vocal: **${message.guild.members.cache.filter(m => m.voice.channel).size}** (**${message.guild.memberCount} membres**)`)
    /*message.channel.send(
   `En ligne : ${members.filter(members => members.presence.status === 'online').size}
    Inactif : ${members.filter(members => members.presence.status === 'idle').size}
    Ne pas déranger : ${members.filter(members => members.presence.status === 'dnd').size}
    Hors Ligne : ${members.filter(members => members.presence.status === 'offline').size}`)*/
};


module.exports.help = {
    name: "vc",
    aliases: ['vc','vocalmembers'],
    category: 'utilitaires',
    description: "Compteur des membres en vocal en direct.",
  };