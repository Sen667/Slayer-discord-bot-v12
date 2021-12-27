const { MessageEmbed } = require("discord.js");
//const { cos } = require("mathjs");
const config = require("../../config");

module.exports.run = async (client, message, args) => { 

    const getSetting = args[0];

    switch(getSetting) {
        case "add": {
            const role = message.mentions.roles.first()

                if (!role) return message.channel.send(`**${message.author.username}**, role not found`)

                const members = await message.guild.members.fetch()
                const rolesfalse = members.filter(members => members.roles.cache.has(role.id) === false)
                /*const rolestrue = members.filter(members => members.roles.cache.has(role.id) === true)*/
    

                if(rolesfalse.size === 0) return message.channel.send(`Le rôle \`${role.name}\` est déjà ajouté à tous les membres du serveur !`)

                const embed = new MessageEmbed()
                .setTitle(`J'ajoute le rôle ${role.name} à ${rolesfalse.size} membres`)
                .setDescription(`🕙 __Temps restant__ : **${rolesfalse.size}s**`)
                .setFooter(client.user.tag)
                .setTimestamp()
                .setColor("#36393f")

                message.channel.send(embed)


        
                await message.guild.members.cache.forEach(member => member.roles.add(role))
                await message.channel.send(`J'ai ajouté le role \`${role.name}\` à ${rolesfalse.size} membres`)
            break;
        }
    }
}

    module.exports.help = {
        name: "massrole"
    }