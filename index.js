const mineflayer = require('mineflayer');
const keepAlive = require('./keep_alive.js');
// Create the bot
const bot = mineflayer.createBot({
  host: 'ajaxksp.aternos.me', // Minecraft server IP
  port: 13042,       // Minecraft server port (default is 25565)
  username: 'Homelander',
  version: '1.20.4'
  // password: 'password', // Uncomment if your server is in online mode
});

// Event when the bot has logged in
bot.on('login', () => {
  console.log('Bot has logged in.');
  bot.chat('Real eyes realize real lies');
});

// Event when the bot receives a chat message
bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  console.log(`${username}: ${message}`);

  if (message === 'test') {
    bot.chat(`No problem, ${username}!`);
  }
});

// Event when the bot encounters an error
bot.on('error', (err) => {
  console.log(`Error: ${err}`);
});

// Event when the bot is kicked from the server
bot.on('kicked', (reason) => {
  console.log(`Kicked: ${reason}`);
});

keepAlive();