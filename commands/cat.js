const Discord = require('discord.js');
const superagent = require("superagent");


module.exports.run = async (bot, message , args) =>{
let{body} = await superagent
.get("http://aws.random.cat/meow");
 
let catembed = new Discord.RichEmbed()

.setColor('#b71468')
.setTitle('Here is a cute Cat for ya ! :cat:')
.setImage(body.file)
.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
.setTimestamp();


message.channel.send(catembed);



}



module.exports.help = {
    name : 'catty'
    }