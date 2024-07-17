//base by 𝛥𝐿𝛯𝛸 𝛲𝛪𝛫𝑈
//re-upload? recode? copy code? give credit ya :)
//YouTube: @SIR-ALEX-PIKU-TECH
//Instagram: alex_piku__
//Telegram: t.me/alexpiku
//GitHub: @piku090909
//WhatsApp: +918536881026
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@SIR-ALEX-PIKU-TECH

const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
