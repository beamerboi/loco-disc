const Discord = require('discord.js');
const errors = require("../util/errors.js");


module.exports.run = async(bot , message , args) =>{
    let bUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
            if(!bUser) return message.channel.send("Double check the mentioned user please !");
            let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message,"BAN_MESSAGES");
    if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("that person can't be banned !");
            let banEmbed = new Discord.RichEmbed()
            .setDescription("~Ban~")
            .setColor("#af0a0a")
            .addField("Banned user", `${bUser} with ID : ${bUser.id}`)
            .addField("Banned By", `<@${message.author.id}>with ID : ${message.author.id}`)
            .addField("Banned in", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", bReason)       
            .setFooter("BAIII",message.author.displayAvatarURL)
            .setTimestamp();
         
    
            let bannedChannel = message.guild.channels.find('name','incidents');
            if (!bannedChannel) return message.channel.send("incidents channel deosn't exist.");
    
            message.guild.member(bUser).ban(bReason);
            bannedChannel.send(banEmbed);
}

module.exports.help = {

    name :"ban"
}