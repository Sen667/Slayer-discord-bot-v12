const db = require('quick.db')

module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send("<:2754danger:837243800165417010> `ERREUR` | Tu n'as pas la permission !")
    }
    if(args[0] === 'on') {
        await db.set(`antispam-${message.guild.id}`, true)
        message.channel.send('Antispam activée avec sucées')
    } else if(args[0] === 'off') {
        await db.delete(`antispam-${message.guild.id}`)
        message.channel.send('Antispam desactivée avec sucées')
    }
}


module.exports.help = {
    name: "antispam",
  };