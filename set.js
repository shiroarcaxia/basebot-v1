const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	danzz: '92y1a7l0a6',
}

global.APIKeys = {
	'92y1a7l0a6': 'YOUR APIKEY',
}

// Other
global.apikey = ['92y1a7l0a6'] // Get in: https://danzzapi.xyz
global.apikeyprem = ['92y1a7l0a6'] // Get in: https://danzzapi.xyz
global.apikeyvip = ['92y1a7l0a6'] // Get in: https://danzzapi.xyz
global.namabot = ['Shiro Bot']
global.namaowner = ['Shiro A']
global.owner = ['6283838323239']
global.premium = ['6283838323239']
global.packname = '© A♡'
global.author = 'A♡'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.prefix = ['']
global.symbol1 = '•'
global.symbol2 = '>'
global.wm = '© Danzz Coding'
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Bot',
    wait: 'Waittt...',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "1000",
        vip: "unlimited"
}
global.thumb = fs.readFileSync('./media/img/1.jpg')
global.qris = { url: 'https://telegra.ph/file/cd0372ebf13b265f3feb5.jpg' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
