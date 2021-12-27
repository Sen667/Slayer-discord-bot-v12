const { MessageEmbed } = require('discord.js')


module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    const msg = await message.channel.send("<a:loading:825483365611995170> Veuillez patienter...")
    const embed = new MessageEmbed()
    .setTitle('Temps de latence')
    .setDescription(`<:836991939844636753:838477360155197480> | Ping : **${Math.round(client.ws.ping)}**ms\n<:836991939844636753:838477360155197480> | Temps de réponse : **${msg.createdTimestamp - message.createdTimestamp}**ms`)
     
    await msg.edit(" ", embed)
    //await EMBED.edit(`<:836991939844636753:838477360155197480> | Ping : ${Math.round(client.ws.ping)}ms\n<:836991939844636753:838477360155197480> | Temps de réponse : ${msg.createdTimestamp - message.createdTimestamp}ms`)

    //message.channel.send(`Ping : <:836991939844636753:838477360155197480> | Rapide (${botping} ms)\nTemps de réponse : <:836991939844636753:838477360155197480> | Rapide (${yourping} ms)`)

}
module.exports.help = {
    name: "ping",
    category: 'general',
    args: false
};
