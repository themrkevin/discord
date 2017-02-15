const help = {};
const config = require('./config.js');
var commands = [];
var mArray = [];

Object.keys(config).forEach(function(key) {
  var args = function() {
    if(config[key].hasOwnProperty('args')) {
      return ` ${config[key]['args']}`;
    } else {
      return '';
    }
  }
  var help = config[key]['help'];
  var item = `${key}${args()}: ${help}`
  commands.push(item);
});

mArray.push('**Look what I can do!**');
mArray.push('```ini');
mArray.push(commands.join('\n'));
mArray.push('```');

help.message = mArray.join('\n');

module.exports = help;
