const app = require('./app')

const PORT = 8000

console.log(typeof app)

app.listen(PORT, () => {
    console.log(`server berjalan di :${PORT}`)
})