const Discord = require('discord.js');


module.exports.run = async(bot,message,args)=>{


    if(!args[2]) return message.reply("Please ask a full question");
    let replies = [" Yup :white_check_mark:", " Nope :x:", " I am not sure ¯\_(ツ)_/¯", " Ask Again Later :clock2: "," Maybe :rolling_eyes:", "It can be"];
let result = Math.floor((Math.random()*replies.length));
let question = args.slice(1).join(" ");
 
let ballEmbed =  new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#c40f7c")
.addField("Question", `**${question}**`)
.addField("Answer", `**${replies[result]}**`)
.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
.setTimestamp();


message.channel.send(ballEmbed)

}



module.exports.help = {
    name:'crystalball'
}