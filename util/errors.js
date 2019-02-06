const Discord = require ("discord.js");
const fs = require('fs');
const config = require('../botconfig.json');

module.exports.noPerms = (message,perm) =>{
    let xembed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setTitle("NO PERMS")
.setColor("#e50026")
.addField("Insufficient Permissions" , perm);


message.channel.send(xembed).then(m => m.delete(5000));
}