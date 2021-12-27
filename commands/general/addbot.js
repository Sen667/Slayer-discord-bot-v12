const { MessageEmbed } = require('discord.js')
const config = require('../../config.json')


module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    const embed = new MessageEmbed()
    .setDescription("[Invite moi](https://discord.com/api/oauth2/authorize?client_id=798673754187497512&permissions=8&scope=bot) ● [Support](https://discord.gg/kepGcdTP)")
    .setFooter("Discord Slayer • 2021")
    .setColor(config.color)
    .setTimestamp()

    message.channel.send(embed)

};

module.exports.help = {
    name: "addbot",
    category: 'general',
    args: false
};