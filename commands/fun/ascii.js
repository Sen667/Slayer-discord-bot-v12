const figlet = require('figlet')
const fs = require("fs");
module.exports.run = (bot, message, args) => {
    
    if(!args[0]) return message.channel.send('Veuillez fournir du texte');

    msg = args.join(" ");

    figlet.text(msg, function (err, data){
        if(err){
            console.log(data) 
            console.log('Something went wron Quelque chose s\'est mal passé');
            console.dir(err);
        }
        if(data.length > 2000) return message.channel.send('Veuillez fournir un texte de moins de 2000 caractères')

        message.channel.send('```' + data + '```')
    })}
    
        
        
        module.exports.help = {
            name: "ascii",
            category: 'fun',
            description: "Convertie votre text en ascii"

          }