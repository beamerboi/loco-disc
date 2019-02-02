const Discord = require('discord.js');
const superagent = require ('superagent');
const randomPuppy = require ('random-puppy');


module.exports.run = async (bot, message , args) =>{

    randomPuppy('darkmemes').then(url =>{
    let memeEmbed = new Discord.RichEmbed()
    .setTitle('Jeff Laughed on that')
    .setImage(url)
    .setColor("#0c9607")
    .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
    .setTimestamp();

    message.channel.send(memeEmbed)
})
    
}
    

module.exports.help = {
    name : 'meme'
    }
    