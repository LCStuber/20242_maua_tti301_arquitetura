const express = require(`express`)
require(`dotenv`).config()

const app = express()

app.use(express.json());

const lembretes = {}

app.get(`/lembretes`, (req, res) => {
    res.json(lembretes)
})

app.post(`/lembretes`, (req, res) => {
    const { texto } = req.body
    const id = Object.keys(lembretes).length
    lembretes[id] = {
        id, texto
    }
    res.status(201).json(lembretes[id])
})

app.listen(process.env.PORT, () => {
    console.log(`Lembretes. Porta: ${process.env.PORT}`)
})