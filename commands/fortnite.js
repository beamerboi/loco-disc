const Discord = require ("discord.js");
const config = require("../botconfig.json");
const Fortnite = require('fortnite');
const ft = new Fortnite("f89b8b0d-2661-4023-a5a7-d7bb42538311");

module.exports.run = async (bot, message , args) => {
    message.delete();
let username = args[0];
let platform = args[1] || "pc";
if(!username) return message.reply("Please provide a username.")

let data = ft.user(username, platform).then(data =>{
   let stats = data.stats;
   let lifetime = stats.lifetime;

   let score = lifetime[6]['Score'];
   let mplayed = lifetime[7]['Matches Played'];
   let wins = lifetime[8]['Wins'];
   let winper = lifetime[9]['Win%'];
   let kills = lifetime[10]['Kills'];
   let kd = lifetime[11]['K/d'];


   let fembed = new Discord.RichEmbed()
   .setTitle("Fortnite Stats")
   .setAuthor(data.username)
   .setColor("#00ddff")
   .addField("Wins", wins,true)
   .addField("Kills", kills,true)
   .addField("Score", score,true)
   .addField("Kill/Death ratio", kd,true)
   .addField("Match Played", mplayed,true)
   .addField("Win percentage", winper,true);
  

   message.channel.send(fembed)


}).catch(e=>{
console.log(e);
message.channel.send("Couldn't find that username in the database");

});
}

module.exports.help = {
    name : 'fortnite'
}