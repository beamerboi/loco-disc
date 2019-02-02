const Discord = require ("discord.js");
const fs = require("fs");
const coins = require("../coins.json");


module.exports.run = async (bot, message , args) => {


    if (!coins[message.author.id]){
        return message.reply("Pal ,unfortunately, you have no credits !")
    }
let puser = message.guild.member(message.mentions.users.first()  || message.guild.get(args[0]));
if(!coins[puser.id]){
    coins[puser.id] = {
        coins : 0 
    };
}
let pcoins = coins[puser.id].coins;
let scoin = coins[message.author.id].coins;

if(scoin< args[0]) return message.reply("No enough coins there!")

coins[message.author.id] = {
    coins : scoin - parseInt(args[1])
};
coins[puser.id] = {
    coins : pcoins + parseInt(args[1])
};

message.channel.send(`${message.author} has given ${puser} ${args[1]} coins .`);
fs.writeFile('./coins.json', JSON.stringify(coins), (err)=>{
    if (err) console.log(err)
});

}

module.exports.help = {
    name : 'pay'
}