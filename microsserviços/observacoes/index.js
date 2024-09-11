const express = require(`express`);
const { v4: uuidv4 } = require('uuid');
require(`dotenv`).config();

const app = express();

app.use(express.json());

const observacoes = {};

app.get(`/lembretes/:id/observacoes`, (req, res) => {
    const id = req.params.id;
    res.json(observacoes[id] || []);
});

app.post(`/lembretes/:id/observacoes`, (req, res) => {
    const id = req.params.id;
    const { texto } = req.body;
    const observacaoId = uuidv4();
    observacoes[id] = {
        id: observacaoId,
        texto
    };
    res.status(201).json(observacoes[id]);
});

app.post('/eventos', (req, res) => {
    console.log(req.body)
    res.status(200).json({mensagem: 'ok'})
})

app.listen(process.env.PORT, () => {
    console.log(`Observações. Porta: ${process.env.PORT}`);
});