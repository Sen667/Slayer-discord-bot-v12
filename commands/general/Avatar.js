const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    const user = message.mentions.users.first() || message.author;

    const embed = new MessageEmbed()
    .setTitle(`Avatar de ${user.tag}`)
    .setImage(user.displayAvatarURL({dynamic: true , size: 2048}))
    .setColor(config.color)
    .setTimestamp()

    message.channel.send(embed)

};

module.exports.help = {
    name: "avatar",
    category: 'general',
    args: false
};