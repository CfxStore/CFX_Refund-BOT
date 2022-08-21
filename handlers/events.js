const { Client } = require("discord.js");
const { readdirSync } = require("fs");

/**
 * 
 * @param {Client} client 
 */

module.exports = async (client) => {

    let eventList = new Map();
    const files = readdirSync("./events/").filter((files) => files.endsWith(".js"));
    for (const file of files) {
        const events = require(`../events/${file}`);
        client.on(file.split(".")[0], events.bind(null, client));
        eventList.set(events)
        console.log(`\x1b[42mINFO\x1b[40m \x1b[33mLoaded \x1b[35mevent \x1b[34m${eventList.size}\x1b[33m.\x1b[37m\u001b[0m`)

    }
}