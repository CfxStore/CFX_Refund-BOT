const { Client } = require("discord.js");

/**
 * 
 * @param {Client} client 
 */

module.exports = async(client, message) => {
    client.user.setPresence({ status: "online", activities: [{ name: client.config.activities.presence, type: client.config.activities.type, }] })
    console.log(`Logged in as ${client.user.username}`)

    client.dbModel.initDatabase();

}