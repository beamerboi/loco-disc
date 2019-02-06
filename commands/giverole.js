const Discord = require('discord.js');
const errors = require("../util/errors.js");

module.exports.run = async(bot, message, args) =>{

if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message,"MANAGE_ROLES");
let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
if(!rMember) return message.reply("couldn't find that user, yo.");
let role = args.join(" ").slice(22);
if(!role) return message.reply("Specify a role please !");
let gRole = message.guild.roles.find('name',role);
if(!gRole)return message.reply("couldn't find a role.");

if(rMember.roles.has(gRole.id)) return message.reply('They already have that role !');
await (rMember.addRole(gRole.id)); 



  message.channel.send(`<@${rMember.id}> been given the role **${gRole.name}**`)
  
}
module.exports.help = {

  name :"giverole"
}