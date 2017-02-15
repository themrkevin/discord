const Discord = require('discord.js');
const Commands = require('./lib/commands.js');
const client = new Discord.Client();
const botMention = '/g ';

client.on('message', function(message) {
  var botMentioned = message.content.startsWith(botMention);

  if(message.content === 'shhh') {
    Commands.shhh(message);
  }

  if(message.content === 'kevin') {
    Commands.kevin(message);
  }

  if(!botMentioned) {
    return false;
  }

  var command = message.content.replace(botMention, '');

  if(command.startsWith('help') || command.startsWith('h')) {
    Commands.help(message);
  }

  if(command.startsWith('dt')) {
    Commands.dt(message);
  }

});

client.login('Mjc5ODA4NjM2MDEwNjI3MDcy.C4APoA.zXMpvaA9XYuEFv22LHwAOn8vBCE');
