const Discord = require('discord.js');
const config = require('../../config.json')

module.exports.run = (client, message, args) => {
    if (message.author.bot) return;

    const help = new Discord.MessageEmbed()
            .setColor(`${config.color}`)
            .setAuthor(`${config.version}`, message.guild.iconURL({dynamic: true, size: 512}))
            .setThumbnail(client.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription(`Voici toutes les commandes disponibles pour le bot \`${client.user.username}\`\n Le préfix du bot est : \`${config.prefix}\``)
            .addField(`<:2637settings:837243800094769182> | Gestion Serveur - `, `[\`ban\`](https://discord.gg/4RHupSy8Tu),[\`kick\`](https://discord.gg/4RHupSy8Tu),[\`clear\`](https://discord.gg/4RHupSy8Tu),[\`nuke\`](https://discord.gg/4RHupSy8Tu),[\`slowmode\`](https://discord.gg/4RHupSy8Tu),[\`lock\`](https://discord.gg/4RHupSy8Tu),[\`unlock\`](https://discord.gg/4RHupSy8Tu),[\`unbanall\`](https://discord.gg/4RHupSy8Tu),[\`addrole\`](https://discord.gg/4RHupSy8Tu),[\`removerole\`](https://discord.gg/4RHupSy8Tu),`)
            .addField(`<:systemmessageuser:837243536013000724> | AntiRaid [BETA] - `, `[\`antispam on/off\`](https://discord.gg/4RHupSy8Tu),[\`antilink on/off\`](https://discord.gg/4RHupSy8Tu),`)
            .addField(`<:825723411707461642:837319991476748319> | Fun - `, `[\`ascii\`](https://discord.gg/4RHupSy8Tu),[\`binary\`](https://discord.gg/4RHupSy8Tu),[\`dog\`](https://discord.gg/4RHupSy8Tu),[\`flip\`](https://discord.gg/4RHupSy8Tu),[\`hug\`](https://discord.gg/4RHupSy8Tu),[\`koala\`](https://discord.gg/4RHupSy8Tu),`)
            .addField(`<:1119globe:837243799783604235> | Général - `,`[\`userinfo\`](https://discord.gg/4RHupSy8Tu), [\`serverinfo\`](https://discord.gg/4RHupSy8Tu), [\`channelinfo\`](https://discord.gg/4RHupSy8Tu), [\`ping\`](https://discord.gg/4RHupSy8Tu), [\`avatar\`](https://discord.gg/4RHupSy8Tu), [\`ancien\`](https://discord.gg/4RHupSy8Tu), [\`recent\`](https://discord.gg/4RHupSy8Tu), [\`addbot\`](https://discord.gg/4RHupSy8Tu),`)
            .addField(`<:825476203230134312:837305349408948274> | Owner -`, `[\`restart\`](https://discord.gg/4RHupSy8Tu),[\`eval\`](https://discord.gg/4RHupSy8Tu)`)
            .addField(` ⁢⁢⁢⁢⁢ ⁢⁢⁢⁢⁢`, `[Discord Slayer](https://discord.com/api/oauth2/authorize?client_id=825332789972041749&permissions=8&scope=bot) ● [Support](https://discord.gg/mZgGZeWw)`)
            .setFooter(`Discord Slayer Version 1.0`,client.user.displayAvatarURL({dynamic: true, size: 512}))
     message.channel.send(help)
    }


    module.exports.help = {
        name: "help"
      };