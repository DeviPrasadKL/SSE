const express = require('express')
const app = express();

const cors = require('cors')
const PORT = 5000

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.get('/events', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    })

    const longText = 'A server-sent event is when a web page automatically gets updates from a server.This was also possible before, but the web page would have to ask if any updates were available. With server-sent events, the updates come automatically.';
    const words = longText.split(" ")
    let index = 0;

    const sendWords = () => {
        if (index < words.length) {
            res.write(`data: ${words[index]}\n\n`)
            index++
        } else {
            clearInterval(intervalId);
        }
    }

    const intervalId = setInterval(sendWords, 500);

    req.on('close', () => {
        clearInterval(intervalId)
    })

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})