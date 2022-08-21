<div align="center">

# CFX_Refund Bot FiveM Bot

Discord.JS Intergrated FiveM Bot
  
![Discord](https://img.shields.io/static/v1?label=Discord.JS&message=V13&color=red)
![NodeJS](https://img.shields.io/static/v1?label=Node.JS&message=V18.0.0&color=green)
![Javascript](https://img.shields.io/static/v1?label=Code%20Language&message=Javascript&color=yellow)

</div>


### Setup the bot

#### Discord Developer Portal
1. First create a application on the [[Developer Portal](https://discord.com/developers/applications)]
2. Make your application a bot [[Image](https://user-images.githubusercontent.com/78086344/134589129-89f91109-4abc-4ca2-be56-d7c0ceb7a082.png)]

#### The bot it self!
1. Change the bot token to your bot token | You can find it under [[here](https://user-images.githubusercontent.com/78086344/134589639-75cdee6e-31bf-4593-b1e1-e8330510adbe.png)] <br>
You can change the token [[here](https://github.com/hoaxFacts/Ticket-System-DiscordJS/blob/main/data/config.yml)]
3. When you changed the token, you can simply start up the bot using: "node ." in your terminal!
* If this gives a error try changing the **Intents** of your bot at [[here](https://user-images.githubusercontent.com/78086344/134589639-75cdee6e-31bf-4593-b1e1-e8330510adbe.png)]

### Command Handler
```js
module.exports = async(client) => {
const discord = require("discord.js");

module.exports = {
    name: "test",
    description: "Dit is een test commando.",
    perms: {
        client: [discord.Permissions.ADMINISTRATOR],
        user: [discord.Permissions.FLAGS.ADMINISTRATOR]
    },
    aliases: ["test"],

    execute: async(client, message, args) => {
    
    // Code
        
    }
}
```
