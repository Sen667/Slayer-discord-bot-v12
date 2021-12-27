const Discord = require('discord.js');
const { oneLine, stripIndent } = require('common-tags');

module.exports.run = async (client, message, args, data) => {

        let index = 1;
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
        if (!channel) {
            channel = message.channel;
            index--;
        }

        if (!channel || channel.type != 'text' || !channel.viewable) {
            return message.channel.send(`<:2754danger:837243800165417010> \`ERREUR\` | Le salon fourni n'est pas un salon valide , il n'est pas visible pas le bot ou pas du bon type... `);
        }

        const rate = args[index];
        if (!rate || rate < 0 || rate > 59) return message.channel.send(`<:2754danger:837243800165417010> \`ERREUR\` | Veuillez indiquer un nombre comprit entre 0 et 59 secondes`);


        if (!channel.permissionsFor(message.guild.me).has(['MANAGE_CHANNELS']))
            return message.channel.send(`<:2754danger:837243800165417010> \`ERREUR\` | Je n'ai pas l'autorisation de gérer ce salon...`);

        let reason = args.slice(index + 1).join(' ');
        if (!reason) reason = 'Aucune raison fournie';
        if (reason.length > 1024) reason = reason.slice(0, 1021) + '...';

        await channel.setRateLimitPerUser(rate, reason);


        if (rate === '0') {
            return message.channel.send(`<:Verfi2:837295104011403275> \`SUCCESS\` | J'ai désactivé le slowmode dans ce salon avec succès`);

        } else {

            return message.channel.send(`<:Verfi2:837295104011403275> \`SUCCESS\` | J'ai activé le slowmode dans ce salon avec succès`);
        } 


    }
    

module.exports.help = {
    name: "slowmode",
  };