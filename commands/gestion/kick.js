const {MessageEmbed} = require('discord.js')
const config = require("../../config.json");

module.exports.run = async(client, message, args) => {

    let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!kickedUser) {
        return message.channel.send('L\'utilisateur :' + kickedUser + 'n\'a pas été trouvé')
    }

    let kickReason = args.join(' ').slice(22);
    if(!kickReason) kickReason = 'Aucune raison spécifiée'

    if(!message.member.hasPermission('KICK_MEMBERS')) {
        return message.channel.send('<:2754danger:837243800165417010> `ERREUR` | Vous n\'avez pas la permission.')
    }
    if(kickedUser.hasPermission('KICK_MEMBERS')) {
        return message.channel.send('<:2754danger:837243800165417010> `ERREUR` | Vous ne pouvez pas kick cet utilisateur car elle a la permmission \`KICK_MEMBERS\`')
    }

    let kickEmbed = new MessageEmbed()
    .setAuthor('Kick')
    .setColor(`${config.color}`)
    .addField('<:825476203359895602:837305349424807936> | User kick', `${kickedUser} (<:825476203287805993:837305349114822698> | ID: ${kickedUser.id})`)
    .addField('<:3624personframe:837243800656805928> | Auteur de la commande', `${message.author} (<:825476203287805993:837305349114822698> | ID: ${message.author.id})`)
    .addField('<:1119globe:837243799783604235> | Salon où la commande a été effectuée', message.channel)
    .addField('<:Verif1:837295104209059840> | Raison', kickReason)

    

    message.guild.member(kickedUser).kick(kickReason)
    message.channel.send(kickEmbed)
}

module.exports.help = {
    name: 'kick'
}