const Discord = require ("discord.js");
const fs = require('fs');
const prefixes = require("../prefixes.json")
module.exports.run = async (bot, message , args) => {
    let prefix = prefixes[message.guild.id].prefixes;
let helpemebedx = new Discord.RichEmbed()
.setAuthor("Infos")
.setThumbnail("https://cdn.discordapp.com/attachments/496035605516386314/542545535538692096/question_mark_PNG120.png")
.setColor("#ff002a")
.addField("Current Prefix is",prefix)
.addField("3 warns","10min mute")
.addField("20 warn","Ban")
.setTitle("To invite me to your server click here")
.setURL("https://discordapp.com/oauth2/authorize?client_id=539935928299290644&scope=bot&permissions=2146958847")
.addField("The bot supports the anti spam","**SO DON'T TRY TO SPAM**")
.setAuthor("infos");


let genemebed = new Discord.RichEmbed()
.setTitle("Those are the genral commands")
.setThumbnail("https://media.discordapp.net/attachments/496035605516386314/542556683612717056/3716.png?width=480&height=480")
.setColor("#ff002a")
.addField("Report <mention someone>","To report someone to the mod team")
.addField("level","Check your current level")
.addField("serverinfo","Check the server info")
.addField("botinfo","Check the bot info");
let funemebed = new Discord.RichEmbed()
.setTitle("Those are the entertainment commands")
.setThumbnail("https://media.discordapp.net/attachments/496035605516386314/542556969970565131/lol-filled.png?width=480&height=480")
.setColor("#ff002a")
.addField("coin","To check your balance")
.addField("slots","To play the slots game")
.addField("crystalball","Play the crystaball game")
.addField("meme","Generate a meme")
.addField("catty","Generate a cute pussy picture")
.addField("doggy","Generate a cute puppy picture")
.addField("fortnite <username> <platform>","Check your fortnite profile stats")
.addField("pay <mentionsomeone> <amount>","To give someone coins")
.addField("motivate","To get motivated")
.addField("say <message>","To let the bot write your message");
let modemebed = new Discord.RichEmbed()
.setTitle("Those are the moderation commands")
.setColor("#ff002a")
.setThumbnail("https://media.discordapp.net/attachments/496035605516386314/542546523448279040/kisscc0-gavel-5b40434d60e759.5677267215309381893969.png?width=480&height=480")
.addField("ban <mention someone> <reason>","To ban someone")
.addField("clear <amount>","To delete messages from the chat")
.addField("giverole <mention someone> <role name>","Give a role")
.addField("kick <mention someone> <reason>","To kick someone")
.addField("removerole <mention someone> <role name>","Remove role")
.addField("mute <mention someone> <duration>","Text mute someone")
.addField("unmute <mention someone>","To unmute someone")
.addField("warn <mention someone> <reason>","To warn someone")
.addField("warnlevel <mention someone>","To check warnlevl of someone")
.addField("prefix <new prefix>","To change the prefix");


let nsfwemebed = new Discord.RichEmbed()
.setTitle("Those are the NSFW commands")
.setThumbnail("https://media.discordapp.net/attachments/496035605516386314/542557239639146499/7NZZg4AKr5-3.png")
.setColor("#ff002a")
.addField("hentai","Genrate a hentai picture")
.addField("ass","Generate an ass picture")
.addField("boobs","Generate a boobs picture")
.addField("pussy","Generate a pussy picture");

message.channel.send(nsfwemebed)
message.channel.send(modemebed)
message.channel.send(genemebed)
message.channel.send(funemebed)
message.channel.send(helpemebedx)
}

module.exports.help = {
    name : 'help'
}