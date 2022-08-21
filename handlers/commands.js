const { readdirSync } = require("fs");
const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */

module.exports = async(client) => {
    readdirSync("./commands/").forEach((dir) => {
        const commandFiles = readdirSync(`./commands/${dir}/`).filter((files) => files.endsWith(".js"));

        for (const file of commandFiles) {
            const command = require(`../commands/${dir}/${file}`);
            if (!command.name) throw new Error("Please provide a command name.");
            if (!command.description) throw new Error("Please provide a command description.")

            client.commands.set(command.name, command);
            console.log(`\x1b[42mINFO \x1b[40m \x1b[33mLoaded (/) \x1b[35mcore \x1b[34m${dir}\x1b[33m.\x1b[37m\u001b[0m`)
        }
    });

    client.on("ready", () => {
        console.log(`Total Commands Loaded: ${client.commands.size}`);
    });
}