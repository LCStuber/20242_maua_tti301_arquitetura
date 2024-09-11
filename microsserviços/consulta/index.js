require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())

const {PORT} = process.env

const baseConsulta = {}

const funções = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.Id] = lembrete
    },
    ObservaçãoCriada: (observação) => {
        const observações = baseConsulta[observação.lembreteId]['observacoes'] || []
        observações.push(observação)
        baseConsulta[observação.lembreteId]['observacoes'] = observações
    }
}

app.get("/lembretes", (req, res) => {
    res.json(baseConsulta)
})


app.post("/eventos", (req, res) => {
    const evento = req.body
    funções[evento.type](evento.payload)
})

app.listen(PORT, () => console.log(`Consulta. ${PORT}`))