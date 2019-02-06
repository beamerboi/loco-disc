const Discord = require('discord.js');
module.exports.run = async(bot,message,args) =>{
    const errors = require("../util/errors.js");

    
    if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message,"MANAGE_ROLES");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("couldn't find that user, yo.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role please !");
    let gRole = message.guild.roles.find('name',role);
    if(!gRole)return message.reply("couldn't find a role.");
    
    if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role !");
    await (rMember.removeRole(gRole.id)); 
    
    
    
      message.channel.send(`<@${rMember.id}> You lost the role **${gRole.name}**`)
}

module.exports.help = {

    name :"removerole"
}