const Discord = require('discord.js');

module.exports.run = async(bot , message , args) =>{
    let sicon = message.guild.iconURL;
    let bicon = bot.user.displayAvatarURL;  
        let botembed = new Discord.RichEmbed()
        .setDescription("Loco, Bot Information")
        .setColor("#115cd6")
        .setThumbnail(bicon)
        .addField("Bot Name", bot.user.username,true)
        .addField("Server Connected",bot.guilds.size,true)
        .addField("Created On", bot.user.createdAt)
        .setFooter("Here is my infos",message.author.displayAvatarURL)
   .setTimestamp();

    
        return message.channel.send(botembed);
}

module.exports.help = {

    name :"botinfo"
}