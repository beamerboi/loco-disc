const Discord = require('discord.js');
const errors = require("../util/errors.js");

module.exports.run = async(bot,message,args) =>{
    if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message,"ADMINISTRATOR");
 let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    let unmuterole = message.guild.roles.find('name',"muted");

      
    if(!rMember.roles.has(unmuterole.id)) return message.reply(" They are not muted! :no_entry_sign:");
    await (rMember.removeRole(unmuterole.id));
    message.channel.send(`<@${rMember.id}> has been unmuted ! :ok_hand:`).then(msg=> msg.delete(5000));
}

module.exports.help = {

    name :"unmute"
}