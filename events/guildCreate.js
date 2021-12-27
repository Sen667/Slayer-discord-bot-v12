const { MessageEmbed } = require("discord.js");

module.exports = async (client, guild, member) => {
    let voicecount = guild.channels.cache.filter(c => c.type === 'voice').size
    let textcount = guild.channels.cache.filter(c  => c.type === 'text').size
    
    let owner = await client.users.fetch(guild.ownerID)

    let total = voicecount + textcount

    const log_channel = client.channels.cache.get('837373533553950750');

    const embed = new MessageEmbed()
        .setColor('GREEN')
        .addField("ID du serveur :", `\`\`\`js\n${guild.id}\`\`\``)
        .addField("Number of channels :", `\`\`\`js\n${total}\`\`\``)
        .addField("Number of roles :", `\`\`\`js\n${guild.roles.cache.size}\`\`\``)
        .setThumbnail(guild.iconURL({ dynamic: true }))
        .setDescription(`<:embed1_mys:825476203136679997> **Nom du serveur : **\`${guild.name}\`\n<:owner1_mys:825476203230134312> **Owner : **\`${owner.tag}\` (<@${owner.id}>)\n<:invites1_mys:825476203359895602> **Members** : \`${guild.memberCount}\``)
        .setFooter("Collision • 2021")
        .setTimestamp()
        
        log_channel.send(`(${client.guilds.cache.size}/100) <@!${client.user.id}> vient d'être ajouté sur le serveur ${guild.name} :`, embed).catch(console.error);

        /*\n**<:textuels:810315345927733289> Number of channels :** \`${total}\`\n**<:iconrole:810315205032280114> Number of roles :** \`${guild.roles.cache.size}\`*/
}