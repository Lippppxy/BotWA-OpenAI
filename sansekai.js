const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const { Configuration, OpenAIApi } = require("openai");
const MessageType = require(`message-type`);
const quoted = require("quoted");
const audio = require("audio");
let setting = require("./key.json");
const 
module.exports = sansekai = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/"
    var prefix = /^[\\/!#.]/gi.test(body) ? body.match(/^[\\/!#.]/gi) : "/";
    const isCmd2 = body.startsWith(prefix);
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);

    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };

    // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";

    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

    if (isCmd2 && !m.isGroup) {
      console.log(chalk.black(chalk.bgWhite("[ LOGS ]")), color(argsLog, "turquoise"), chalk.magenta("From"), chalk.green(pushname), chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`));
    } else if (isCmd2 && m.isGroup) {
      console.log(
        chalk.black(chalk.bgWhite("[ LOGS ]")),
        color(argsLog, "turquoise"),
        chalk.magenta("From"),
        chalk.green(pushname),
        chalk.yellow(`[ ${m.sender.replace("@s.whatsapp.net", "")} ]`),
        chalk.blueBright("IN"),
        chalk.green(groupName)
      );
    }

    if (isCmd2) {
      switch (command) {
        case "help":
        case "menu":
          m.reply
          menu = fs.readFileSync(`./Shiroko1.jpg`)
          client.sendImage(from, menu, text, mek)
          m.reply
          (`*━━𝙎𝙃𝙄𝙍𝙊𝙆𝙊 𝘽𝙔 𝘼𝙇𝙄𝙁𝙌𝙍━━*
          
          ❝𝐂𝐎𝐌𝐌𝐀𝐍𝐃 𝐋𝐈𝐒𝐓❞
1. 𝙐𝙣𝙩𝙪𝙠 𝙢𝙚𝙣𝙖𝙣𝙮𝙖𝙠𝙖𝙣 𝙥𝙚𝙧𝙩𝙖𝙣𝙮𝙖𝙖𝙣
𝐊𝐞𝐭𝐢𝐤 #𝐚𝐢   (𝘊𝘰𝘯𝘵𝘰𝘩𝘯𝘺𝘢: #𝘢𝘪 𝘊𝘢𝘳𝘢 𝘮𝘦𝘯𝘨𝘩𝘢𝘣𝘪𝘴𝘬𝘢𝘯 𝘶𝘢𝘯𝘨 𝘰𝘳𝘢𝘯𝘨 𝘵𝘶𝘢 𝘥𝘦𝘯𝘨𝘢𝘯 𝘤𝘦𝘱𝘢𝘵)

2. 𝙐𝙣𝙩𝙪𝙠 𝙢𝙚𝙢𝙗𝙪𝙖𝙩 𝙜𝙖𝙢𝙗𝙖𝙧 𝙙𝙖𝙧𝙞 𝙩𝙚𝙠𝙨
𝐊𝐞𝐭𝐢𝐤 #𝐢𝐦𝐠 (𝘊𝘰𝘯𝘵𝘰𝘩𝘯𝘺𝘢: #𝘪𝘮𝘨 𝘚𝘰𝘦𝘩𝘢𝘳𝘵𝘰)

3. 𝙄𝙣𝙛𝙤 𝙤𝙬𝙣𝙚𝙧𝙣𝙮𝙖😎
𝐊𝐞𝐭𝐢𝐤 #𝐨𝐰𝐧𝐞𝐫

━━━━━━━━━━━━━━━
ᴊɪᴋᴀ ʜᴀꜱɪʟɴʏᴀ ᴛɪᴅᴀᴋ ᴍᴜɴᴄᴜʟ ᴅᴀʟᴀᴍ ᴋᴜʀᴜɴ ᴡᴀᴋᴛᴜ ʟᴀᴍᴀ, ʙᴇʀᴀʀᴛɪ ꜱᴇʀᴠᴇʀɴʏᴀ ꜱᴇᴅᴀɴɢ ɢᴀʟᴀᴜ
`);

          break;
        case "owner":
        m.reply
        (`*Data Profil*
        • *Nama:* Alif a.k.a Allep
        • *Umur:* 18 tahun (13 April)
        
        _Social Media._
        • *Whatsapp:* 6289647090775
        • *Youtube:* Muhammad Alif Qadri
        • *Github:* github.com/Lippppxy
        `)
          break;
        
        case "tes":
          tes = fs.readFileSync(`./sounds/Halo.mp3`)
          client.sendMessage(from, tes, MessageType.Audio)
        break;
        
          
        case "ai": case "openai": 
          try {
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);

            const response = await openai.createCompletion({
              model: "text-davinci-003",
              prompt: text,
              temperature: 0,
              max_tokens: 2000,
              top_p: 1.0,
              frequency_penalty: 0.0,
              presence_penalty: 0.0,
            });
            m.reply(`${response.data.choices[0].text}`);
          } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
        case "img": case "ai-img": case "image": case "images":
          try {
            if (setting.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file key.json\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Wooden house on snow mountain`);
            const configuration = new Configuration({
              apiKey: setting.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            client.sendImage(from, response.data.data[0].url, text, mek);
            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
          break;
        default: {
          if (isCmd2 && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (isCmd2 && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            } else if (argsLog || (isCmd2 && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("tidak tersedia", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
