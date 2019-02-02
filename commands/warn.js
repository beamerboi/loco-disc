const Discord = require('discord.js');
const fs = require('fs');
const ms = require ('ms');
let warns = JSON.parse(fs.readFileSync("./warning.json","utf8"));

module.exports.run= async (bot , message , args) => {
if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply(`i'm not gonna let you do that...do you think i was born yesterday...joke's on you pal i was born in ${bot.user.createdAt.toDateString()}`);
let wUser = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0])
if(!wUser) return message.reply("huh , couldn't find the target")
if(wUser.hasPermission("KICK_MEMBERS")) return message.reply("they waaaaaaaay too kewl !")
let reason = args.join(" ").slice(22);

if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
};

warns[wUser.id].warns++;

fs.writeFile("./warning.json", JSON.stringify(warns), (err) => {
    if(err) console.log(err);
});

let warnEmbed = new Discord.RichEmbed()
.setDescription("warns")
.setAuthor(message.author.username)
.setColor("#ff0000")
.addField("Warned User ", `<@${wUser.id}>`)
.addField("Warned In ",message.channel)
.addField("Number of Warnings", warns[wUser.id].warns)
.addField("Reason", reason)
.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
.setTimestamp();


let warnChannel = message.guild.channels.find('name',"incidents");
if(!warnChannel) return message.reply("Couldn't find The Channel");
warnChannel.send(warnEmbed);


if(warns[wUser.id].warns == 3 ){
let muterole = message.guild.roles.find('name',"muted");

let mutetime = "10m";

await (wUser.addRole(muterole.id));
await wUser.addRole(muterole.id).then(async () => {
message.channel.send(`<@${wUser.id}> has been temporarily muted for 10 minutes`);
});
setTimeout(function(){
    wUser.removeRole(muterole.id)
    message.reply('They have been unmuted')
}, ms(mutetime))
}
if(warns[wUser.id].warns == 20){
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`)
    
}
}


module.exports.help = {
name : 'warn'
}