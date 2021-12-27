const {
    MessageEmbed,
    ReactionCollector,
    Message
} = require("discord.js");


module.exports.run = async (client, message, args) => {
    let embedBeforeEdit = new MessageEmbed()
        .setDescription(" ⁢⁢⁢⁢⁢⁢⁢⁢⁢⁢")

    let msgEmbedForEditing = await message.channel.send(embedBeforeEdit)
    const msgInfo = await message.channel.send(`:pencil2: Modifier le titre\n:speech_balloon: Modifier la description\n:detective: Modifier l'auteur\n:small_red_triangle_down: Modifier le footer\n:white_square_button: Modifier le thumbnail\n:clock10: Modifier le timestamp\n:frame_photo: Modifier l'image\n:globe_with_meridians: Modifier l'url\n:blue_circle: Modifier la couleur\n:leftwards_arrow_with_hook: Ajouter un field\n:x: Supprimer un field\n:inbox_tray: Copier un embed existant\n:white_check_mark: Envoyer l'embed\n:bookmark_tabs: Modifier un message du bot avec cet embed`);
    await Promise.all(['✏️', '💬', '🕵️', '🔻', '🔳', '🕙', '🖼️', '🌐', '🔵', '↩️', '❌', '📥', '✅', '📑'].map(r => msgInfo.react(r)))

    const filterReaction = (reaction, user) => user.id === message.author.id && !user.bot;
    const filterMessage = (m) => m.author.id === message.author.id && !m.author.bot;
    const collectorReaction = await new ReactionCollector(msgInfo, filterReaction);
    collectorReaction.on('collect', async reaction => {
        switch (reaction._emoji.name) {
            case '✏️':
                reaction.users.remove(message.author.id);
                const msgQuestionTitle = await message.channel.send("Quel est le **titre** de l'embed ?")
                const title = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;
                msgQuestionTitle.delete()
                embedBeforeEdit.setTitle(title)
                msgEmbedForEditing.edit(embedBeforeEdit)
                break;

            case '💬':
                reaction.users.remove(message.author.id);
                const msgQuestiondecription = await message.channel.send("Quelle est la **description** de l'embed ?")
                const decription = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;
                msgQuestiondecription.delete()
                embedBeforeEdit.setDescription(decription)
                msgEmbedForEditing.edit(embedBeforeEdit)
                break;

            case '🕵️':
                reaction.users.remove(message.author.id);
                const msgQuestionAuthorName = await message.channel.send("Quel est le nom de l'**auteur** de l'embed ?")
                const AuthorName = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;

                const msgQuestionAuthoriconURL = await message.channel.send("Quelle est la **photo de profil** de l'auteur de l'embed ?")
                const AuthoriconURL = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;


                const msgQuestionURL = await message.channel.send("Quel est le **lien** de l'auteur de l'embed ? (Il faut que votre lien commence par http ou https)")
                const URL = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;

                msgQuestionAuthorName.delete()
                msgQuestionAuthoriconURL.delete()
                msgQuestionURL.delete()

                embedBeforeEdit.setAuthor(AuthorName, AuthoriconURL, URL)
                msgEmbedForEditing.edit(embedBeforeEdit)

                break;

            case '🔻':
                reaction.users.remove(message.author.id);
                const msgQuestionFooter = await message.channel.send("Quel est le **footer** de l'embed ?")
                const Footer = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;

                const msgQuestioFootericonURL = await message.channel.send("Quel est l'**icône** du footer ?")
                const FootericonURL = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;

                msgQuestionFooter.delete()
                msgQuestioFootericonURL.delete()

                embedBeforeEdit.setFooter(FootericonURL, Footer)
                msgEmbedForEditing.edit(embedBeforeEdit)
                break;

            case '🔳':
                reaction.users.remove(message.author.id);
                const msgQuestionThumbnail = await message.channel.send("Quelle est le **Thmbnail** de l'embed ?")
                const Thumbnail = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;
                msgQuestionThumbnail.delete()
                embedBeforeEdit.setThumbnail(Thumbnail)
                msgEmbedForEditing.edit(embedBeforeEdit)
                break;

            case '🕙':
                reaction.users.remove(message.author.id);
                embedBeforeEdit.setTimestamp()
                msgEmbedForEditing.edit(embedBeforeEdit)
                break;

            case '🖼️':
                reaction.users.remove(message.author.id);
                const msgQuestionImage = await message.channel.send("Quelle est l' **image** de l'embed ?")
                const Image = (await message.channel.awaitMessages(filterMessage, {
                    max: 1,
                    time: 60000
                })).first().content;
                msgQuestionImage.delete()
                embedBeforeEdit.setImage(Image)
                msgEmbedForEditing.edit(embedBeforeEdit)
                break;

                case '✅':
                    reaction.users.remove(message.author.id);
                    const msgchannelsssss = await message.channel.send("Veuillez precisez l'identifiant du channel !")
                    const channelsssss = (await message.channel.awaitMessages(filterMessage, {
                        max: 1,
                        time: 60000
                    })).first().content;
                    client.channels.cache.get(channelsssss).send(embedBeforeEdit)
                    break;
        }
    })




}

module.exports.help = {
    name: "embed"
};