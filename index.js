const Discord = require("discord.js");
const client = new Discord.Client();

client.login("NTk5Mjc2ODAyMTMyOTM0NjU2.XTf0Ew.FGyPDRRzuksoz0Aq3T2AacF0UKk");

console.log("start");

client.on('message', (message) => {
    if(message.content == "Старт")
    {
        message.channel.send("Битва за подземелье началась. Первый бот Мышка - Пышка 99 HP. Команда Удар сномит по 5 hp");
    }
});

client.on('message', (message) => {
    if(message.content == "Удар")
    {
        message.channel.send("Вы снесли боссу 5 hp");
    }
});

client.on('message', (message) => {
    if(message.content == "КОМБО")
    {
        message.channel.send("КОМБО УДАР!!! ВЫ СНЕСЛИ 20 HP");
    }
});
