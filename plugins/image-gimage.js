case 'gimage': {
        if (isBan) throw mess.ban
        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
        if (!text) throw `Example : ${prefix + command} John Cena`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let log = await getBuffer(images)
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    jpegThumbnail: log,
                    caption: `*▊▊▊ GOOGLE IMAGE ▊▊▊*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: ZimBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
