const Discord = require('discord.js');
const superagent = require ('superagent');
const randomPuppy = require ('random-puppy');


module.exports.run = async (bot, message , args) =>{

    randomPuppy('motivation').then(url =>{
    let motivateEmbed = new Discord.RichEmbed()
    .setTitle('Here you go')
    .setImage(url)
    .setColor("#4286f4")
    .setFooter("feels drowning ? , here you go", message.author.displayAvatarURL)
    .setTimestamp();

    message.channel.send(motivateEmbed)
})
    
}
    

module.exports.help = {
    name : 'motivate'
    }