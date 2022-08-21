const discord = require('discord.js')

class InterMenu {
    constructor(client) {
        this.client = client;
    }

    selectCategory() {
        return new discord.MessageActionRow()
             .addComponents(
                 new discord.MessageSelectMenu()
                     .setCustomId("select-category-menu")
                     .setPlaceholder("Selecteer een Refund Categorie")
                     .addOptions(
                         {
                             label: "Item",
                             description: "Selecteer deze als je een ITEM wilt refunden.",
                             value: 'item_option'
                         },

                         {
                             label: "Geld",
                             description: "Selecteer deze als je GELD wilt refunden.",
                             value: 'money_option'
                         },
                         {
                             label: "Weapon",
                             description: "Selecteer deze als je een WAPEN wilt refunden.",
                             value: 'weapon_option'
                         }
                     )
             )
    }

    redeemCreatedToUser(user, item, quantity, moderator) {
        return new discord.MessageEmbed()
            .setTitle('Refund Ontvangen ✅')
            .setDescription(`<@${moderator}> heeft succesvol een refund aangemaakt voor jou. Ga in de stad en gebruik **/redeem**. Veel plezier met je spullen!`)
            .addField("Refunded User", `<@${user.id}>`, true)
            .addField("Item", item, true)
            .addField("Hoeveelheid", quantity, true)
            .setColor(this.client.config.settings.color)
            .setThumbnail(this.client.config.settings.thumbnailURL)
            .setTimestamp();
    }

    redeemCreated(user, item, quantity, moderator){
        return new discord.MessageEmbed()
            .setTitle('Refund Aangemaakt ✅')
            .setDescription(`<@${moderator}> heeft succesvol een refund aangemaakt.`)
            .addField("Refunded User", `${user}`, true)
            .addField("Item", item, true)
            .addField("Hoeveelheid", quantity, true)
            .setColor(this.client.config.settings.color)
            .setThumbnail(this.client.config.settings.thumbnailURL)
            .setTimestamp();
    }

    categoryEmbedBase(category, usage, user, emote){
        return new discord.MessageEmbed()
            .setTitle(`Categorie ${category} ${emote}`)
            .setDescription(`<@${user.id}> hier onder vind je alle informatie die je nodig hebt om een refund aan te maken.`)
            .addField("Usage",`\`\`\`${usage}\`\`\``, true)
            .setColor(this.client.config.settings.color)
            .setThumbnail(this.client.config.settings.thumbnailURL)
            .setTimestamp();
    }

    sendCategoryUsage(category, interaction){
        if(category === "item") return this.categoryEmbedBase("Item", "!refund <@user> <item> <aantal>", interaction.user, "🔨");
        if(category === "geld") return this.categoryEmbedBase("Money", "!refund <@user> money <aantal> \n!refund <@user> black_money <aantal> ", interaction.user, "💰");
        if(category === "wapen") return this.categoryEmbedBase("Weapon", "!refund <@user> WEAPON_<NAAM> <kogels>", interaction.user, "🔫");
    }

    standardMenuEmbed(){
        return new discord.MessageEmbed()
            .setTitle(`Refund Systeem | CFX Store`)
            .setDescription(`Selecteer een van de onderstaande categorieeen via het select menu. Kies de bij passende bij jou Refund!.`)
            .setColor(this.client.config.settings.color)
            .setThumbnail(this.client.config.settings.thumbnailURL)
            .setTimestamp();
    }



}

module.exports = InterMenu;