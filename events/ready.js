
const { Activity } = require("discord.js");
const config = require("../config.json");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    let statuses = [
        `En ligne sur ${client.guilds.cache.size} serveurs`,
        `Discord Slayer | V ${config.version}`,
        `Mon prefix est | ${config.prefix}`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        client.user.setActivity(status, {
            type: "WATCHING", //url:"https://www.twitch.tv/sennfr"
            status:"dnd"
        })
    }, 5000)


};