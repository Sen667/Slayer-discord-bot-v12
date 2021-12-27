const Discord = require('discord.js');
const config = require('../../config.json')

module.exports.run = async (client, message, args) => {

 if(!message.member.hasPermission("ADMINISTRATOR")) return;
 message.member.voice.channel.join().then(m => { 
message.channel.send(`:white_check_mark: ${message.author}, déplace moi dans le salon ou tu souhaite que je déplace toutes les personnes du salon!`)
setTimeout(() => {
    message.member.voice.channel.leave()
    }, 120000);
})
    };
    module.exports.help = {
        name: "voicemoove",
        aliases: ['vm','voicem'],
        category: 'moderation',
        description: "Déplace toutes les personnes d'un salon vers un autre",
      };