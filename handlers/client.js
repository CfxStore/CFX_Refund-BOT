const { Client, Collection} = require("discord.js");
const client = new Client({
    intents: ["GUILDS", "GUILD_BANS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    allowedMentions: {
        parse: ["everyone", "roles", "users"],
        repliedUser: true
    },
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});


let dbModel = require("./../DatabaseModels/refund.js")
let sMenu = require("./interactions.js")
const fs = require("fs")
const yaml = require("js-yaml")

/**
 * 
 * @param {Client} client 
 */


function loadFile(file) {
    return myFile = yaml.load(fs.readFileSync(`${file}`, 'utf8'))
}


module.exports = async(client) => {
    client.commands = new Collection();
    client.slashcommands = new Collection();
    
    client.config = loadFile("./data/config.yml")
    client.mysql = require('mysql');

    client.dbModel = new dbModel(client)

    client.menu = new sMenu(client)
}