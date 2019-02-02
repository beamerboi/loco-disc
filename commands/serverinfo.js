const Discord = require('discord.js');

module.exports.run = async(bot , message , args) =>{
    let sicon = message.guild.iconURL;
            let serverembed = new Discord.RichEmbed()
            .setDescription('Those Are The Server informations')
            
            .setColor('#e2149e')
            .setThumbnail(sicon)
            .addField("Server Name", `${message.guild.name}`,true)
            .addField("Server region", `**${message.guild.region}**`, true)
            .addField("Owner", message.guild.owner,true)
            .addField("Server Roles", message.guild.roles.size,true)
            .addField("Created On",`**[${ message.guild.createdAt}]**`,true)
            .addField("You Joined At", `**[${message.member.joinedAt}]**`,true)
            .addField("Total Members", `**${message.guild.memberCount}**`,true)
            .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
            .setTimestamp();
            return message.channel.send(serverembed);
        
}

module.exports.help = {

    name :"serverinfo"
}