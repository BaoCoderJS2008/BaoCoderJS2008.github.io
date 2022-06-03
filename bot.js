const { Client, Intents } = require("discord.js");
const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ] 
});
const TOKEN = "OTgyMTA3MTE5NjM1NTU0MzY1.GEo73P.l_ar1SqIfk074SKDyvq0k8PvwhY1yv_r9x6UUk";

client.on("ready", () => {
  console.log(`Bot ${client.user.tag} đã đăng nhập thành công`);
});



client.on('messageCreate', (msg) => {
	console.log(`${msg.author.username} : ${msg.content}`);
  switch (msg.content.toLowerCase()) {
    case "hello":
      msg.reply("Hi");
      break;
    case "hey bot":
      msg.reply("Hả?");
      break;
    case "ping":
      msg.reply("pong");
      break;
    case "tôi có đẹp trai không?":
      if (msg.author.username == "Нгуен Тайский Бао") {
        msg.reply(`Có chứ, @${msg.author.username} đẹp trai nhất group sau này nhiều người theo lắm`);
      } else {
        msg.reply(`Có cái nịt nhé bro @${msg.author.username}`);
      }
      break;
      case "randomint":
        var number = Math.round(Math.random()*1000);
        number = number.toString();
        msg.reply(number);
        break;
      case "randomfl":
        var number = Math.random()*1000;
        number = number.toString();
        msg.reply(number);
        break;
      
  }
  
});

client.login(TOKEN);
