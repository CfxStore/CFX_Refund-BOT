/**
 *  @By : https://github.com/cfxStore
 *  @Creator : https://github.com/HoaxFacts
*/

const { Client } = require("discord.js");
const client = new Client({
    intents: ["GUILDS", "GUILD_BANS", "GUILD_INVITES", "GUILD_MEMBERS", "GUILD_MESSAGES"],
    partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});

let yaml = require("js-yaml")
let fs = require("fs")

require("./handlers/client")(client);
require("./handlers/events")(client);
require("./handlers/commands")(client);
require("./handlers/slash_commands")(client);

client.config = yaml.load(fs.readFileSync(`./data/config.yml`, 'utf8'))

client.login(client.config.client.token)