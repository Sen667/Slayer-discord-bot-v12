const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("<:2754danger:837243800165417010> `ERREUR` | Tu n'as pas la permission !");
    if(!args[0])
    return message.reply("<:2754danger:837243800165417010> `ERREUR` | Tu n'as pas précisez le nombre de message à supprimer !");

    message.channel.bulkDelete(args[0]).then(() => {

        message.channel.send(`<:Verfi2:837295104011403275> \`SUCCESS\` | J'ai supprimé **${args[0]} messages**`).then(msg => msg.delete(5000))
    })
}

module.exports.help = {
    name: "clear"
}