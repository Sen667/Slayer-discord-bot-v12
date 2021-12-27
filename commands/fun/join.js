const Discord = require("discord.js"); 
module.exports = { 
  name: "join", 
  category: "musique",
  description: "faire rejoindre le bot en vocal", 
run: async (bot, message, args) => {
 if (!message.member.voice.channel) return message.channel.send(":x: Vous             n'ètes pas connectez à un Vocal !"); 
   message.member.voice.channel.join(); 
   message.channel.send(":white_check_mark: Connecté au Vocal !") 
  }
}
module.exports.help = { 
  name: "join",
  description: "Faire rejoindre le bot en vocal.",
}