const Discord = require("discord.js")

module.exports.run = async(bot, message, args) => {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        message.guild.fetchBans().then(bans => {
            if (bans.size == 0) {message.channel.send("<:2754danger:837243800165417010> `ERREUR` | Il n'y a aucun membre banni sur le serveur.")};
            bans.forEach(ban => {
                message.guild.members.unban(ban.user.id);
            });
        }).then(() => message.channel.send("<:Verfi2:837295104011403275> \`SUCCESS\` | Tous les utilisateurs bannis ont été débanni.")).catch(e => console.log(e))
    } else {message.channel.send("<:2754danger:837243800165417010> `ERREUR` | Vous n\'avez pas la permission d'utiliser cette commande")}
}

module.exports.help = {
    name:"unbanall"
}