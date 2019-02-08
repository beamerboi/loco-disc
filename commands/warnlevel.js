const Discord = require('discord.js');
const fs = require ('fs');
const ms = require ('ms');
let warns = JSON.parse(fs.readFileSync("./warning.json","utf8"));


module.exports.run = async (bot,message,args) => {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`i'm not gonna let you do that...do you think i was born yesterday...joke's on you pal i was born in ${bot.user.createdAt.toDateString()}`);
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
if(!wUser) return message.reply("huh , couldn't find the target");
let warnlevel = warns[wUser.id].warns;

message.channel.send(`<@${wUser.id}> has ${warnlevel} warnings.`);

}
module.exports.help = {
    name : 'warnlevel'
}
