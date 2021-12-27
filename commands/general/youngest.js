const { MessageEmbed } = require("discord.js")
const fs = require("fs");
const moment = require('moment')
const config = require('../../config.json')
module.exports.run = async (client, message, args) => {

    let mem = message.guild.members.cache
      .filter((m) => !m.user.bot)
      .sort((a, b) => b.user.createdAt - a.user.createdAt)
      .first();
    const Embed = new MessageEmbed()
      .setTitle(`Le plus jeune membre de ${message.guild.name}`)
      .setColor(config.color)
      .setDescription(`<:3624personframe:837243800656805928>** |** **l'utilisateur Le plus jeune** : \`${mem.user.tag}\` \n** <:825501712847601702:837404214257909802> | Date de création du compte**: \`${moment(mem.user.createdAt).format('DD/MM/YYYY')}\``)
      .setTimestamp()

    message.channel.send(Embed);


};


module.exports.help = {
    name: "recent",
    category: 'general',

  };