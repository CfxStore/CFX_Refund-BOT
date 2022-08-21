const { Client, Message } = require("discord.js");

/**
 * 
 * @param {Client} client 
 * @param {Message} message 
 */

module.exports = async(client, message) => {

    if (!message.guild || message.author.bot) return;
    const prefix = client.config.client.prefix
    if (!message.content.startsWith(prefix)) return;

    if(message.guild.id != client.config.settings.guildID) return console.log("Server not authorized. Please set a valid guild id.")

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName) || client.commands.find((x) => x.aliases && x.aliases.includes(commandName));

    if (!command) return;

    if(!message.member.permissions.has(command.perms.user)) return message.channel.send({content: "Je hebt onvoldoende rechten om deze command uit te kunnen voeren."})

    try {
        command.execute(client, message, args, prefix);

    } catch (error) {
        console.error(error);
        await message.channel.send({
            content: "An unexpected error occured!"
        });
    }
}