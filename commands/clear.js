const Discord = require ("discord.js");



module.exports.run = async (bot, message , args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`i'm not gonna let you do that...do you think i was born yesterday...joke's on you pal i was born in ${bot.user.createdAt.toDateString()}`);
    if(!args[0]) return message.channel.send("**choose how many messages do you want to delete**");
message.channel.bulkDelete(args[0]).then(() =>{
message.channel.send(`Cleared ${args[0]} messages. :ok_hand:`).then(msg=> msg.delete(5000));
});
}

module.exports.help = {
    name : 'clear'
}