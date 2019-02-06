const Discord = require('discord.js');
const superagent = require ('superagent');
const randomPuppy = require ('random-puppy');


module.exports.run = async (bot, message , args) =>{
    if (!message.channel.nsfw) return message.channel.send('The Room should be ``NSFW``');

randomPuppy('hentaihot').then(url =>{
    let meeeEmbed = new Discord.RichEmbed()
    .setTitle("That's Hot")
    .setImage(url)
    .setColor("#0c9607")
    .setFooter("i can predict more",message.author.displayAvatarURL)
    .setTimestamp();
 

    message.channel.send(meeeEmbed)
})
    
    
    }
    

module.exports.help = {
    name : 'hentai'
    }
    