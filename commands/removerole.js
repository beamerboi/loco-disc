const Discord = require('discord.js');
module.exports.run = async(bot,message,args) =>{

    
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(`i'm not gonna let you do that...do you think i was born yesterday...joke's on you pal i was born in ${bot.user.createdAt.toDateString()}`);
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