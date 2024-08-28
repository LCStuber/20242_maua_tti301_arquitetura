const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const {
    PROTOCOL, BASE_URL, CITY_ID, APP_ID, LANG_API, CNT, UNITS
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?id=${CITY_ID}&appid=${APP_ID}&lang=${LANG_API}&cnt=${CNT}&units=${UNITS}`

axios.get(url)
    .then(res => {
        return res.data
    }).then(res => {
        for (let previsão of res['list']) {
            let data = new Date(+previsão.dt * 1000)
            let tempMin = previsão.main.temp_min
            let tempMax = previsão.main.temp_max
            let descrição = previsão.weather[0].description
            console.log(`
                data: ${data.toLocaleString()}
                temp min: ${tempMin} \u00B0C
                temp max: ${tempMax} \u00B0C
                Descrição: ${descrição}`)
        }
        return res['list']
    }
    ).then(res => {
        let cont = 0
        for (let previsão of res) {
            if (+previsão.main.feels_like > 20){
                cont++
            }
        }
        console.log(`\nExistem ${cont} vezes em que a sensação térmica ficará acima de 20 \u00B0C`)
    })