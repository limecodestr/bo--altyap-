
const Discord = require('discord.js')
 
exports.run = async (client ,message, args) => {

message.reply(`Pong! Pingim: ${client.ws.ping}ms`)      //Lime Codes tarafından yapılmıştır | iyi kodlamalar dileriz!

};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'ping',
 description: 'Botun Pingini Ölçer',
 usage: 'ping'
};
