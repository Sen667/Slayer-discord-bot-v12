const { MessageEmbed } = require("discord.js")
const config = require("../../config.json");

module.exports.run = async(client, message, args) => {
        if (!args[0]) return message.channel.send("<:2754danger:837243800165417010> `ERREUR` | Tu n'as pas précisez le rôle.")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("<:2754danger:837243800165417010> `ERREUR` | Tu n'as pas entrer un rôle valide.");

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor(`${config.color}`)
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("**<:825476203359895602:837305349424807936> | ID**", `\`${role.id}\``, true)
            .addField("**<:1717pencil:837243799851368449> | Name**", role.name, true)
            .addField("**<:825476203287805993:837305349114822698> | Hex**", role.hexColor)
            .addField("**<:3624personframe:837243800656805928> | Membres**", role.members.size)
            .addField("**<:2690chart:837243799939448872> | Position**", role.position)
            .addField("**<:1119globe:837243799783604235> | Mentionable**", status[role.mentionable])
            .setTimestamp()

        message.channel.send(roleembed);
    }

    module.exports.help = {
        name: 'roleinfo'
        };