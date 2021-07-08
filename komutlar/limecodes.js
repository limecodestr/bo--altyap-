
const Discord = require('discord.js')
 
exports.run = async (client ,message, args) => {

message.reply("https://discord.gg/KXKgnfj9zK")         //Lime Codes tarafından yapılmıştır | iyi kodlamalar dileriz!

};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};
 
exports.help = {
 name: 'limecodes',
 description: 'Botun Pingini Ölçer',
 usage: 'ping'
};
