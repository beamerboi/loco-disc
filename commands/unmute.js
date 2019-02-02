const Discord = require('discord.js');
module.exports.run = async(bot,message,args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`i'm not gonna let you do that...do you think i was born yesterday...joke's on you pal i was born in ${bot.user.createdAt.toDateString()}`);
 let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let unmuterole = message.guild.roles.find('name',"muted");

      
    if(!rMember.roles.has(unmuterole.id)) return message.reply(" They are not muted! :no_entry_sign:");
    await (rMember.removeRole(unmuterole.id));
    message.channel.send(`<@${rMember.id}> has been unmuted ! :ok_hand:`).then(msg=> msg.delete(5000));
}

module.exports.help = {

    name :"unmute"
}