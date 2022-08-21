const { Client, Interaction, GuildMember } = require("discord.js");
const { isForInStatement } = require("typescript");

/**
 * @param {Client} client
 * @param {Interaction} interaction
 */

module.exports = async(client, interaction) => {
    interaction.deferUpdate()

    if (interaction.isCommand()) {

        // When slash command is executed.
        const slash_commands = client.slashcommands.get(interaction.commandName);
        if (!slash_commands) return interaction.followUp({ content: "This interaction failed." });

        try {
            slash_commands.execute(client, interaction);
        } catch (e) {
            console.error(e)
        }
    }

    if (interaction.isButton()) {
            // When button is clicked.
    }

    if(interaction.isSelectMenu()){
        if (interaction.customId !== "select-category-menu") {
            return;
        }

        let option = "";
        for (const value of interaction.values) {
            option += `${value}`
        }
        switch (option) {
             case "item_option":
                 interaction.channel.send({embeds: [client.menu.sendCategoryUsage("item", interaction)]})
                 break;

             case "money_option":
                 interaction.channel.send({embeds: [client.menu.sendCategoryUsage("geld", interaction)]})
                 break;

             case "weapon_option":
                 interaction.channel.send({embeds: [client.menu.sendCategoryUsage("wapen", interaction)]})
                 break;
             default:
                 interaction.channel.send({embeds: [client.menu.sendCategoryUsage("item", interaction)]})
                 break;
        }
    }
}