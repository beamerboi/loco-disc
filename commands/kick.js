const Discord = require('discord.js');

module.exports.run = async(bot , message , args) =>{
    let kUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
            if(!kUser) return message.channel.send("Double check the mentioned user please !");
            let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`i'm not gonna let you do that...do you think i was born yesterday...joke's on you pal i was born in ${bot.user.createdAt.toDateString()}`);
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("that person can't be kicked !");
            let kickEmbed = new Discord.RichEmbed()
            .setDescription("~Kick~")
            .setColor("#591040")
            .addField("Kicked user", `${kUser} with ID : ${kUser.id}`)
            .addField("Kicked By", `<@${message.author.id}>with ID : ${message.author.id}`)
            .addField("Kicked in", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason)
            .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
            .setTimestamp();
    
            let kickChannel = message.guild.channels.find('name','incidents');
            if (!kickChannel) return message.channel.send("incidents channel deosn't exist.");
    
            message.guild.member(kUser).kick(kReason);
            kickChannel.send(kickEmbed);
        }

        module.exports.help = {
        
            name :"kick"
        }