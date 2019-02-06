const Disocrd = require('discord.js');
const ms = require('ms');
const errors = require("../util/errors.js");

module.exports.run = async (bot,message, args) => {
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.reply("make sure you mentioned the right target. ");
if(tomute.hasPermission("ADMINISTRATOR")) return errors.noPerms(message,"ADMINISTRATOR");
let muterole = message.guild.roles.find('name',"muted");
//tasnaa e role
if(!muterole){
    try{
        muterole = await message.guild.createRole({
name : "muted",
color : "000000",
permissions : []
        })
        message.guild.channels.forEach(async(channel, id)=>{
            await channel.overwritePermissions(muterole, {
SEND_MESSAGES : false,
ADD_REACTIONS: false
            });
        });
}catch(e){
    console.log(e.stack);
}
}
//kamel aamel e role
let mutetime = args[1];
if(!mutetime) return message.reply("~You didn't specify a time :timer:~");

await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> Has been muted for ${ms(ms(mutetime))} :zipper_mouth:`);
setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted ! :grinning:`)
}, ms(mutetime))
tomute.send(`Sorry , but You have been muted for **${ms(ms(mutetime))}** :zipper_mouth: `);

let muteEmbed = new Disocrd.RichEmbed()
            .setDescription("~Muted~")
            .setColor("#f44289")
            .addField("Muted user ", `${tomute} with ID : ${tomute.id}`)
            .addField("Muted By ", `<@${message.author.id}> with ID : ${message.author.id}`)
            .addField("Muted in", message.channel, true)
            .addField("For", `${ms(ms(mutetime))}`, true)
            .setFooter("SHHHHH!", message.author.displayAvatarURL)
            .setTimestamp()

            let muteChannel = message.guild.channels.find(c => c.name === "warns");
            message.delete().catch(O_o => {});
            muteChannel.send(muteEmbed);
//el module yekmel
}


module.exports.help ={
    name :'mute'
}