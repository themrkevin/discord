const c = {};
const commandsPath = './commands/';
const help = require(commandsPath + 'help.js');

c.help = function(m) {
  m.author.sendMessage(help.message)
    .then(message => m.channel.sendMessage(m.author + ', check DM\'s and make me do things.'))
    .catch(console.error);
}

c.dt = function(floor) {
  
}

c.shhh = function(m) {
  m.react('😭').catch(console.error);
}

c.kevin = function(m) {
  m.channel.sendMessage('shhh');
}

module.exports = c;
