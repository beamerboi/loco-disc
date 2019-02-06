const Discord = require ("discord.js");
let coins = require ("../coins.json")



module.exports.run = async (bot, message , args) => {

    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins : 0
        };
    }
let ucoins = coins[message.author.id].coins;
let coinsEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#faff00")
.addField(`:money_with_wings:  ${ucoins}`, `${message.author}`)
.setFooter("MONEY MONEY MONEY",message.author.displayAvatarURL)
   .setTimestamp();

message.channel.send(coinsEmbed).then(msg =>{msg.delete(5000)});
}

module.exports.help = {
    name : 'coin'
}