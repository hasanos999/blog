const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.sendEmbed(
        new Discord.RichEmbed()
          .setDescription("\`\`\`Yetkin Yok\`\`\`")
          .setColor("#2F3136")
      ).then(m => m.delete(5000))
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Ne Yazayım.').then(m => m.delete(5000))
 
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,

};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
