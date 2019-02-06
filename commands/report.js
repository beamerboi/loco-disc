const Discord = require('discord.js');

module.exports.run = async(bot , message , args) =>{
   
        let rUser = message.mentions.members.first()  || message.guild.members.get(args[0]);
        if(!rUser) return message.channel.send("Make sure you mentioned the right person. ");
        let reason = args.join(" ") || "None";
         message.channel.send(`Thanks for reporting ${rUser} `)

        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Report")
        .setColor('#a31204')
        .addField("Reported User", `${rUser} with ID : ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}` )
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)  
        .addField("Reason", reason)
        .setFooter("Reported successfully", message.author.displayAvatarURL)
        .setTimestamp();
        
        let reportschannel = message.guild.channels.find(c => c.name === "warns");
        if (!reportschannel) return message.channel.send("Sorry but the report channel doesn't exist.")

        message.delete().catch(O_o => {});
        reportschannel.send(reportEmbed);
}

module.exports.help = {

    name :"report"
}