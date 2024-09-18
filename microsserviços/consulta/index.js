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
    try{
        const evento = req.body
        console.log(evento)
        funcoes[evento.type](evento.payload)  
      }
      catch(err){}
      res.json({msg: 'ok'})
})

app.listen(PORT, () => console.log(`Consulta. ${PORT}`))