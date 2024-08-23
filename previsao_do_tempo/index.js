const axios = require('axios')
const dotenv = require('dotenv')

const PROTOCOL = process.env.PROTOCOL
const BASE_URL = process.env.BASE_URL
const CITY_ID = process.env.CITY_ID
const APP_ID = process.env.APP_ID
const LANG_API = process.env.LANG_API

const url = `${PROTOCOL}://${BASE_URL}?id=${CITY_ID}&appid=${APP_ID}&lang=${LANG_API}`

console.log(url)