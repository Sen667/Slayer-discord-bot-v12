module.exports = {
    name: "restart",
    category: "owner",
    run: async (client, message, args) => {
        if (message.author.id !== '774678584081252402') {
            return message.channel.send(`<:2754danger:837243800165417010> \`ERREUR\` | Tu n'as pas la permission !`)
        }
        await message.channel.send(`Restarting bot <a:1974typing:837243520196018198>`)
        process.exit();
    }
}

module.exports.help = {
    name: 'restart'
}