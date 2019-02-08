const Discord = require('discord.js');
const errors = require("../util/errors.js");

module.exports.run = async(bot , message , args) =>{
    let kUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
            if(!kUser) return message.channel.send("Double check the mentioned user please !");
    let kReason = args.join(" ") || "None";
    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message,"KICK_MEMBERS");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("that person can't be kicked !");
            let kickxEmbed = new Discord.RichEmbed()
            .setDescription("~Kick~")
            .setColor("#591040")
            .addField("Kicked user", `${kUser} with ID : ${kUser.id}`)
            .addField("Kicked By", `<@${message.author.id}>with ID : ${message.author.id}`)
            .addField("Kicked in", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason)
            .setFooter("BAI baii",message.author.displayAvatarURL)
   .setTimestamp();

    
            let kickChannel = message.guild.channels.find('name','incidents');
            if (!kickChannel) return message.channel.send("incidents channel deosn't exist.");
    
            message.guild.member(kUser).kick(kReason);
            kickChannel.send(kickxEmbed);
        }

        module.exports.help = {
        
            name :"kick"
        }
