const Discord = require ("discord.js");
const botconfig = require ("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");


module.exports.run = async (bot, message , args) => {
if(!xp[message.author.id]){
    xp[message.author.id]={
xp : 0,
level: 0
    };
}
let currxp = xp[message.author.id].xp;
let currlvl = xp[message.author.id].level;
let nxtlvlxp = currlvl * 300;
let difference = nxtlvlxp - currxp

let lvlEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor(purple)
.addField("Your current level is", currlvl,true)
.addField("your current xp is",currxp,true)
.addField(`XP till level up : `, `${difference} XP`,true)
.setFooter("Loco",message.author.displayAvatarURL);
message.channel.send(lvlEmbed).then(msg=> {msg.delete(5000)});
}

module.exports.help = {
    name : 'level'
}