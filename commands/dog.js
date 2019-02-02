const Discord = require('discord.js');
const superagent = require("superagent");


module.exports.run = async (bot, message , args) =>{
let{body} = await superagent
.get("https://random.dog/woof.json");
 
let dogembed = new Discord.RichEmbed()

.setColor('#b75814')
.setTitle('Here is a cute Dog for ya ! :dog:')
.setImage(body.url)        
.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
.setTimestamp();


message.channel.send(dogembed);



}



module.exports.help = {
    name : 'doggy'
    }