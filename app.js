const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
const config = require('config')
const { websockified } = require('./middleware/wsroutes')
const { routes } = require('./middleware/routes')

const bodyParser = require('body-parser')

const PORT = config.get('port') || 5000

const server = app.listen(PORT, () => console.log(`App has been started on port : ${PORT}...`))

app.use(cors())
app.use(helmet())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


routes(app)
websockified(server)
