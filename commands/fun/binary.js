const axios = require('axios');
const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
module.exports.run = async (client, message, args) => {
    let config = require("../../config.json")

    const url = `http://some-random-api.ml/binary?text=${args}`;

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`<:2754danger:837243800165417010> \`ERREUR\` | Veuillez préciser un texte a traduire !`)
    }

    const embed = new MessageEmbed()
        .setTitle('Texte en binaire')
        .setDescription(data.binary)
        .setColor(`${config.color}`)
     message.channel.send(embed)
};


module.exports.help = {
    name: "binary",
    category: 'Fun',
    description: "Code binary ton tect.",
  };