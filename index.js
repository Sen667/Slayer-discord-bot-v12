const Discord = require("discord.js");
const client = new Discord.Client({
    restTimeOffset: 0,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    fetchAllUsers: true
});
const {
    readdirSync
} = require("fs");
const db = require('quick.db');


const fs = require("fs");

const Enmap = require("enmap");

const config = require("./config.json");

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

client.config = config;

client.commands = new Enmap();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

console.log("------------------------------------------------");

fs.readdir("./events/", (err, files) => {
    if (err) return console.error;
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const evt = require(`./events/${file}`);
        let evtName = file.split(".")[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));
    });
    console.log("------------------------------------------------");
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

fs.readdir("./commands/", async (err, files) => {
    files.forEach((file) => {
        const loadCommands = (dir = "./commands/") => {
            readdirSync(dir).forEach(dirs => {
                const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

                for (const file of commands) {
                    const getFileName = require(`${dir}/${dirs}/${file}`);
                    client.commands.set(getFileName.help.name, getFileName);
                    console.log(`[COMMANDS]` + ` Order loading >` + ` ${getFileName.help.name}.js`);
                };
            });
        };
        loadCommands()

    });
    console.log("------------------------------------------------");
});

process.on("unhandledRejection", (error) => {
    console.error("Unhandled promise rejection:", error);
});

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
//soon
client.on('message', message =>{
    const PREFIX = db.get(`guild_${message.guild.id}_prefix`) || "?"
    if(!message.content.startsWith(PREFIX))return
    
    const args = message.content.substring(PREFIX.length).split(" ")
    
    if(message.content.startsWith(`${PREFIX}prefix`)) {
      if(!message.member.hasPermission('MANAGE_GUILD'))return message.channel.send("Tu n'as pas les permission")
      if(!args[1])return message.channel.send("Precise un prefix !")
      if(args[1].length > 4)return message.channel.send("Le prefix est de maximum 4 characters")
      if(args[1] === db.get(`guild_${message.guild.id}_prefix`))return message.channel.send("C'est deja le prefix actuel")
      if(args[1] === "?") db.delete(`guild_${message.guild.id}_prefix`)
      db.set(`guild_${message.guild.id}_prefix`,args [1])
      return message.channel.send(`Le nouveau prefix est ${args[1]}`)
    }
    })
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//ANTILINK
client.on("message", async message => {
    if (db.has(`antilink-${message.guild.id}`) === false) return;
    if (message.content.includes("discord.gg/") || message.content.includes("discordapp/invites") || message.content.includes(".gg/") || message.content.includes("discord.io") || message.content.includes("https://"))
        if (message.member.hasPermission("ADMINISTRATOR")) {
            return
        } else {
            message.delete()
            message.reply("Vous n'avez pas la permission d'envoyer des liens !")
        }
        
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//ANTISPAM
const usersMap = new Map();
const LIMIT = 4;
const TIME = 7000;
const DIFF = 3000;

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (db.has(`antispam-${message.guild.id}`) === false) return;
    if (usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const {
            lastMessage,
            timer
        } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if (difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        } else {
            ++msgCount;
            if (parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'muted');
                if (!muterole) {
                    try {
                        muterole = await message.guild.roles.create({
                            name: "muted",
                            permissions: []
                        })
                        message.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                            })
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }
                message.member.roles.add(muterole);
                message.channel.send('You have been muted!');
                setTimeout(() => {
                    message.member.roles.remove(muterole);
                    message.channel.send('You have been unmuted!')
                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    } else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage: message,
            timer: fn
        });
    }
})

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

//setprefix





















client.login(config.token || process.env.TOKEN);
