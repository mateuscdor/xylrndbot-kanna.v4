let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Sewa Bot 〙 ═
╠➥ *1 Minggu* : Rp 5.000,00
╠➥ *3 Minggu* : Rp 14.000,00
╠➥ *1 Bulan*   : Rp 18.000,00
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Ovo & Dana
║
╠═ Tertarik untuk menyewa Bot Ini?
╠➥ Hubungi Owner ➡️ https://wa.me/6285251626154?text=Permisi+mau+sewa+bot
║
╠═〘 Xylrnd-Bot 〙 ═`.trim(), wm, 'Ovo', '.viaovo', 'Dana', '.viadana', m)
}

handler.command = /^sewabot$/i

module.exports = handler
