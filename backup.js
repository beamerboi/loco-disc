//     if(cmd ===`${prefix}kick`){

//         let kUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
//         if(!kUser) return message.channel.send("Double check the mentioned user please !");
//         let kReason = args.join(" ").slice(22);
// if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("sorry, No can do pal !");
// if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("that person can't be kicked !");
//         let kickEmbed = new Discord.RichEmbed()
//         .setDescription("~Kick~")
//         .setColor("#591040")
//         .addField("Kicked user", `${kUser} with ID : ${kUser.id}`)
//         .addField("Kicked By", `<@${message.author.id}>with ID : ${message.author.id}`)
//         .addField("Kicked in", message.channel)
//         .addField("Time", message.createdAt)
//         .addField("Reason", kReason);

//         let kickChannel = message.guild.channels.find('name','incidents');
//         if (!kickChannel) return message.channel.send("incidents channel deosn't exist.");

//         message.guild.member(kUser).kick(kReason);
//         kickChannel.send(kickEmbed);
// return;
//     }

//     if(cmd === `${prefix}ban`){
//         let bUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
//         if(!bUser) return message.channel.send("Double check the mentioned user please !");
//         let bReason = args.join(" ").slice(22);
// if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("sorry, No can do pal !");
// if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("that person can't be banned !");
//         let banEmbed = new Discord.RichEmbed()
//         .setDescription("~Ban~")
//         .setColor("#af0a0a")
//         .addField("Banned user", `${bUser} with ID : ${bUser.id}`)
//         .addField("Banned By", `<@${message.author.id}>with ID : ${message.author.id}`)
//         .addField("Banned in", message.channel)
//         .addField("Time", message.createdAt)
//         .addField("Reason", bReason);

//         let bannedChannel = message.guild.channels.find('name','incidents');
//         if (!bannedChannel) return message.channel.send("incidents channel deosn't exist.");

//         message.guild.member(bUser).ban(bReason);
//         bannedChannel.send(banEmbed);
//         return;
//     }

    

//     if(cmd === `${prefix}warn`){

//         let rUser = message.guild.member(message.mentions.users.first()  || message.guild.members.get(args[0]));
//         if(!rUser) return message.channel.send("Make sure you mentioned the right person. ");
//         let reason = args.join(" ").slice(22);

//         let reportEmbed = new Discord.RichEmbed()
//         .setDescription("Warn")
//         .setColor('#a31204')
//         .addField("Warned User", `${rUser} with ID : ${rUser.id}`)
//         .addField("Warned By", `${message.author} with ID: ${message.author.id}` )
//         .addField("Channel", message.channel)
//         .addField("Time", message.createdAt)  
//         .addField("Reason", reason)
//         let reportschannel = message.guild.channels.find('name', "warns");
//         if (!reportschannel) return message.channel.send("Sorry but the warning channel doesn't exist.")

//         message.delete().catch(O_o => {});
//         reportschannel.send(reportEmbed);

//         return;
//     }

//  if(cmd === `${prefix}serverinfo`){

//         let sicon = message.guild.iconURL;
//         let serverembed = new Discord.RichEmbed()
//         .setDescription('Those Are The Server informations')
//         .setColor('#e2149e')
//         .setThumbnail(sicon)
//         .addField("Server Name", message.guild.name)
//         .addField("Created On", message.guild.createdAt)
//         .addField("You Joined At", message.member.joinedAt)
//         .addField("Total Members", message.guild.memberCount);
//         return message.channel.send(serverembed);
//     }
  

 
// if(cmd === `${prefix}botinfo`){

//     let bicon = bot.user.displayAvatarURL;  
//     let botembed = new Discord.RichEmbed()
//     .setDescription("Loco, Bot Information")
//     .setColor("#115cd6")
//     .setThumbnail(bicon)
//     .addField("Bot Name", bot.user.username)
//     .addField("Created On", bot.user.createdAt)

//     return message.channel.send(botembed);
// }