const botconfig = require('./botconfig.json');
const Discord = require ("discord.js");
const bot = new Discord.Client ({disableEveryone : true});
const fs = require("fs");
bot.commands = new Discord.Collection();
let coins = require ("./coins.json");
let xp = require ("./xp.json");
let purple = botconfig.purple;
let cooldown = new Set();
let cdseconds = 5;


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
        if (err) console.log(err)});
        let coinEmbed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#faff00")
        .addField(`:money_with_wings:  you gained ${coinAmt}`, `${message.author}`)
        .setFooter(`${bot.user.username}`, bot.user.displayAvatarURL)
        .setTimestamp();
    

        message.channel.send(coinEmbed).then(msg =>{msg.delete(3000)});
    
    }
let xpAdd = Math.floor(Math.random()* 7) + 8
   console.log(xpAdd);
if(!xp[message.author.id]){
    xp[message.author.id] = {
        xp : 0,
        level : 0
    };
}

let curxp = xp[message.author.id].xp;
let curlvl = xp[message.author.id].level;
let nextlvl = xp[message.author.id].level * 300;
xp[message.author.id].xp = curxp + xpAdd;
if(nextlvl <= xp[message.author.id].xp){
    xp[message.author.id].level=curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setColor("#b709c4")
    .addField("Leveled Up to",`level ${curlvl + 1}`);
    message.channel.send(lvlup).then(msg =>{msg.delete(5000)});

}
fs.writeFile("./xp.json", JSON.stringify(xp),(err)=>{
    if(err) console.log(err)
});
if(cooldown.has(message.author.id)){
    message.delete();
   return message.reply("Stop spamming dude , chill").then(msg =>{msg.delete(5000)});
}
if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
}


let prefix = prefixes[message.guild.id].prefixes;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(message.content.startsWith(prefix)){
        let commandfile = bot.commands.get(cmd.slice(prefix.length));
        if (commandfile) commandfile.run(bot,message, args);
    }
    setTimeout(()=> {
        cooldown.delete(message.author.id)
    },cdseconds *1000 )

});

bot.login(process.env.Token);
