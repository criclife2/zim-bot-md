import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Not found'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
 ⫺╤╤╧ *𝘔𝘪𝘴𝘴 𝘘𝘦𝘦𝘯 𝘞𝘈 𝘣𝘰𝘵* ╧╤╤⫹

🎭 *Title:* ${title}

🎭 *Url:* ${url}

🎭 *Description:* ${description}

🎭 *Published:* ${publishedTime}

🎭 *Duration:* ${durationH}

🎭 *Views:* ${viewH}

⫺ ╧╧╧╧╧╧ ⋞ 〈 ⫹⫺ 〉 ⋟ ╧╧╧╧╧╧ ⫹
  `.trim(), author, thumbnail, '', '', null, null, [
    ['🎶SONG🎶', `${usedPrefix}yta ${url} yes`],
    ['📽VIDEO️📽️', `${usedPrefix}ytv ${url} yes`]
  ], m, { asLocation: 1 })
}
handler.help = ['song', 'song2'].map(v => v + '')
handler.tags = ['downloader']
handler.command = /^song2?$/i

handler.exp = 0
handler.limit = false

export default handler

