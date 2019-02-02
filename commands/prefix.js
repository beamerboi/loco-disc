const Discord = require('discord.js');
const fs = require('fs');


module.exports.run = async (bot, message, args, prefix) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Hold on , you can't do that command");
    if(!args[0] || args[0 == "help"]) return message.channel.send("Usage : /prefix <desired prefix here>");
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    };
fs.writeFile("./prefixes.json", JSON.stringify(prefixes),(err) =>{
    if (err) console.log(err)
});

let sEmbed = new Discord.RichEmbed()
.setColor("#0f14bc")
.setTitle('Prefix Settings')
.setDescription(`The prefix changed to ${args[0]}`)
.setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
.setTimestamp();
message.channel.send(sEmbed);
}

module.exports.help ={
    name :'prefix'
}