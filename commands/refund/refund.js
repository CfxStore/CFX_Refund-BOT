let discord = require('discord.js');


/**
 *  @By : https://github.com/cfxStore
 *  @Creator : https://github.com/HoaxFacts
*/

module.exports = {
    name: "refund",
    description: "Dit is een refund command.",
    usage: `!refund @user <item> <amount>`,
    perms: {
        client: [discord.Permissions.DEFAULT],
        user: [discord.Permissions.FLAGS.MANAGE_CHANNELS],
        config: "MANAGE_CHANNELS"
    },
    aliases: ["toevoegen"],

    execute: async(client, message, args) => {
        let targetUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!targetUser || targetUser === undefined) return  message.channel.send({ components: [client.menu.selectCategory()], embeds: [client.menu.standardMenuEmbed()]})

        let discordID = targetUser.id;
        if(discordID === undefined) return;

        let item = args[1];
        if(!item) return message.channel.send({content: "Je moet een **item** meegeven."})

        let quantity = Number(args[2]);
        if(Number.isNaN(quantity)) return message.channel.send({content: "Het aantal kan alleen een nummer zijn."})
        if(!quantity) return message.channel.send({content: "Je moet een **hoeveelheid** meegeven."})

        client.dbModel.pool.getConnection(async function(err, connection){
            quantity = quantity.toString();
            if(err){
                console.log(err)
                return;
            }            

               await connection.query('INSERT INTO cfx_refunds(discord, item, quantity) values (?, ?, ?)', [discordID, item, quantity], async function (error) {
                if(error){
                    return await message.channel.send({content: "Deze persoon heeft nog een refund openstaan sluit deze voordat je een nieuwe kan aanmaken."})
                }

                await message.channel.send({embeds: [client.menu.redeemCreated(targetUser, item, quantity, message.author.id)]})
                await targetUser.send({embeds: [client.menu.redeemCreatedToUser(targetUser, item, quantity, message.author.id)]})
            });
         });
    }   
}