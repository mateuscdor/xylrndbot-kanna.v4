let handler  = async (m, { conn, command, args, usedPrefix }) => {
	let type = (args[0] || '').toLowerCase()
	let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        let users = global.db.data.users
        if (!who) throw `tag or mention someone!`
        if (!args[1]) throw `Where count number?`
	global.db.data.users[who].bank += count * 1
                        conn.reply(m.chat, `┏• Berhasil Topup ke Bank @${who.split`@`[0]} ☑️\n┗• *+${count} Money 💹*`.trim(), m, { contextInfo:{ mentionedJid: [who] }})
                        }
                        
handler.help = ['topup <count>']
handler.tags = ['rpg', 'owner']
handler.command = /^topup$/i
handler.group = true
handler.mods = true


export default handler
