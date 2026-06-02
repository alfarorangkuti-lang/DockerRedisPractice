const app = require('./app')
require('dotenv').config()
const db = require('./config/database')

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server berjalan di :${process.env.PORT}`)
})