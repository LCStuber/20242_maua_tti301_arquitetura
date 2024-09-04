const axios = require('axios')
const dotenv = require('dotenv')
const inquirer = require('inquirer')

dotenv.config()

const {
    PROTOCOL, BASE_URL, CITY_ID, APP_ID, LANG_API, CNT, UNITS
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?id=${CITY_ID}&appid=${APP_ID}&lang=${LANG_API}&cnt=${CNT}&units=${UNITS}`

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

const Batata = async () => {
    const url = `${PROTOCOL}://${BASE_URL}?id=${CITY_ID}&appid=${APP_ID}&lang=${LANG_API}&cnt=${CNT}&units=${UNITS}`
    const res = await axios.get(url)
    for (let previsão of res.data['list']) {
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
    
    let cont = 0
    for (let previsão of res.data["list"]) {
        if (+previsão.main.feels_like > 20){
            cont++
        }
    }
    console.log(`\nExistem ${cont} vezes em que a sensação térmica ficará acima de 20 \u00B0C`)
}

Batata()