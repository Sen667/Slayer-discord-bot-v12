const { Message } = require('discord.js')

module.exports.run = async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('<:2754danger:837243800165417010> `ERREUR` | Tu ne possèdes pas les permissions.')
        const target = message.mentions.members.first() //member = mentions
        if(!target) return message.channel.send('<:2754danger:837243800165417010> `ERREUR` | Il faut que tu spécifies un membre !')
        const role = message.mentions.roles.first() // roles = mentions
        if(!role) return message.channel.send('<:2754danger:837243800165417010> `ERREUR` | Il faut que tu spécifies un membre ! ')
        await target.roles.remove(role)
        message.channel.send(`<:Verfi2:837295104011403275> \`SUCCESS\` | ${target.user.username}  j'ai retiré se rôle ! `) //
    
}

module.exports.help = {
    name: "removerole"
}