const botconfig = require('./botconfig.json');
const Discord = require ("discord.js");
const bot = new Discord.Client ({disableEveryone : true});
const fs = require("fs");
const token = process.env.Token
bot.commands = new Discord.Collection();
const coins = require ("./coins.json");
fs.readdir("./commands/", (err, files)=>{

    if(err) console.log(err);

    let jsfile = files.filter(f =>f.split(".").pop() === "js")

    if(jsfile.length<= 0){
        console.log("couldn't find the commands.")
        return;
    }

    jsfile.forEach((f, i) =>{
let props = require(`./commands/${f}`);
console.log(`${f} loaded! `);
bot.commands.set(props.help.name , props);
    } );
});

bot.on("ready",async ()=>{
console.log(`${bot.user.username} is online ! on ${bot.guilds.size} servers`);
bot.user.setActivity("Despacito 2", {type:"Watching"});
});

bot.on("guildMemberAdd", async member=>{
console.log(`${member} Joined the server !`);

let welcomeChannel = member.guild.channels.find('name' ,'logs');
welcomeChannel.send(`welcome ${member}! Have a nice stay !`)
});

bot.on("guildMemberRemove", async member =>{
    console.log(`${member} Left the server !`);

    let welcomeChannel = member.guild.channels.find('name' ,'logs');
    welcomeChannel.send(`Bye, ${member}! Watch out for the zombies outside !`)
});

bot.on("channelCreate", async channel =>{
    console.log(`${channel} has been created !`);

    let sChannel = channel.guild.channels.find('name' ,'general');
    sChannel.send(`YAY, ${channel}! Has been created !`)
});

bot.on("channelDelete", async channel =>{
    console.log(`${channel.name} has been deleted !`);

    let sChannel = channel.guild.channels.find('name' ,'general');
    sChannel.send(`ehh, **${channel.name}** Has been deleted !`)
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;


    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", 'utf8'));
    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
            prefixes : botconfig.prefix
        };
    }

    if(!coins[message.author.id]){
        coins[message.author.id] = {
            coins : 0
        };
    }
    let coinAmt=Math.floor(Math.random()* 15) + 1 ;
    let baseAmt=Math.floor(Math.random()* 15) + 1 ;
console.log(`${coinAmt} ; ${baseAmt}`);

    if(coinAmt === baseAmt){
        coins[message.author.id] = {
            coins : coins [message.author.id].coins + coinAmt
        };
        fs.writeFile("./coins.json", JSON.stringify(coins), (err) =>{
            if (err) console.log(err)
        });
        let coinEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#faff00")
        .addField(`:money_with_wings:  you gained ${coinAmt}`, `${message.author}`)
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
        .setTimestamp();
    

        message.channel.send(coinEmbed).then(msg =>{msg.delete(3000)});
    
    }


    let prefix = prefixes[message.guild.id].prefixes;
console.log(prefix);
   
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if (commandfile) commandfile.run(bot,message, args);
    

})
bot.login(process.env.Token);
