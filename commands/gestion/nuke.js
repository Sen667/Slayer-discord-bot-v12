const Discord = require('discord.js')


module.exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
        return message.channel.send("<:2754danger:837243800165417010> `ERREUR` | Tu n'as pas la permission !")
    }

    message.channel.send('<a:1974typing:837243520196018198> `NUKING`')
    
    await message.channel.clone().then

    ((ch) =>{ch.setParent(message.channel.parent.id);

    ch.setPosition(message.channel.position);

    message.channel.delete().then 

    (ch.send('**<:Verfi2:837295104011403275> `SUCCESS` | Le Channel a bien été recrée**'))

   });
}

module.exports.help = {
    name: 'nuke'
}