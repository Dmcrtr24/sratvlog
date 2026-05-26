const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('www'))

const srat_base = [
    "срать логами начал",
    "срем потоком данных",
    "сру в консоль",
    "сри ошибка 500",
    "засрал диск полностью",
    "перднул варнингом",
    "обосрался эксепшеном",
    "туалет переполнен логами"
]

function gen_srat() {
    const lvl = Math.random() > 0.7 ? 'ERROR' : 'INFO'
    const txt = srat_base[Math.floor(Math.random() * srat_base.length)]

    const obj = {
        time: new Date().toISOString(),
        level: lvl,
        message: `${txt} #${Math.floor(Math.random() * 9999)}`,
        pid: process.pid
    }

    return JSON.stringify(obj)
}

app.get('/sratlogami', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache, no-transform')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('X-Accel-Buffering', 'no')

    res.flushHeaders?.()

    const intervalTime = Number(req.query.speed) || 500

    const heartbeat = setInterval(() => {
        res.write(': ping\n\n')
    }, 25000)

    const interval = setInterval(() => {
        const payload = gen_srat()
        res.write(`data: ${encodeURIComponent(payload)}\n\n`)
    }, intervalTime)

    req.on('close', () => {
        clearInterval(interval)
        clearInterval(heartbeat)
        res.end()
    })
})

app.listen(port, () => {
    console.log('srat server up on ' + port)
})
