const express = require('express');
const authRoutes = require('./routes/authRoutes')
const categoriesRoutes = require('./routes/categoriesRoutes')
const suppliersRoutes = require('./routes/suppliersRoute')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

app.use('/auth',authRoutes)
app.use('/categories', categoriesRoutes)
app.use('/suppliers', suppliersRoutes)

app.get('/', (req, res) => {
    res.send(["learn docker-redis"]);
})

module.exports = app