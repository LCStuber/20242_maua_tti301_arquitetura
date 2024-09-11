const express = require(`express`);
const { v4: uuidv4 } = require('uuid');
const axios = require('axios')
require(`dotenv`).config();

const app = express();

app.use(express.json());

const observacoes = {};

app.get(`/lembretes/:id/observacoes`, (req, res) => {
    const id = req.params.id;
    res.json(observacoes[id] || []);
});

app.post('/lembretes/:idLembrete/observacoes', async (req, res) => {
    const { texto } = req.body;
    const observacaoId = uuidv4();
    const observacoesDoLembrete = observacoes[req.params.idLembrete] || []
    observacoesDoLembrete.push({id: observacaoId, texto})
    observacoes[req.params.idLembrete] = observacoesDoLembrete
    await axios.post('http://localhost:10000/eventos', {
        type: 'ObservacaoCriada',
        payload: {
        id: observacaoId,
        texto,
        lembreteId: req.params.idLembrete
        }
    })
    res.status(201).json(observacoesDoLembrete);
});

app.post('/eventos', (req, res) => {
    console.log(req.body)
    res.status(200).json({mensagem: 'ok'})
})

app.listen(process.env.PORT, () => {
    console.log(`Observações. Porta: ${process.env.PORT}`);
});