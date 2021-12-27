const moment = require('moment')
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
const config = require("../../config.json")
module.exports.run = async (client, message, args) => {

    let mem = message.guild.members.cache
    .filter((m) => !m.user.bot)
    .sort((a, b) => a.user.createdAt - b.user.createdAt)
    .first();
  const Embed = new MessageEmbed()
    .setTitle(`Le membre le plus âgé de ${message.guild.name}`)
    .setColor(config.color)
    .setDescription(`<:3624personframe:837243800656805928>** |** **l'utilisateur le plus ancien** : \`${mem.user.tag}\` \n**  <:825501712847601702:837404214257909802> | Date de création du compte**: \`${moment(mem.user.createdAt).format('DD/MM/YYYY')}\``)
    .setTimestamp()
  message.channel.send(Embed);


};


module.exports.help = {
    name: "ancien",
    category: 'general',
  };