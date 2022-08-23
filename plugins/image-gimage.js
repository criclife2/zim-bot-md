import { googleImage } from '@bochilteam/scraper'
if (!text) throw `Example : ${prefix + command} ml nana`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
  {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: images },
  caption: `❰ 𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘 ❱
*𝗤𝗨𝗘𝗥𝗬* : ${text}
*𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
  footer: ZimBotInc.user.name,
  buttons: buttons,
  headerType: 4
   }
   ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
handler.help = ['gimage', 'image']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

export default handler
