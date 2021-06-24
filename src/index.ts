require('dotenv').config()
import express from 'express'
import path from 'path'

import requestLogger from './midellware/reqLogger'

const app = express()

var cors = require('cors')
app.use(cors({ optionsSuccessStatus: 200 }))

app.use(requestLogger)
app.use(express.static(path.join(__dirname, 'public')))

app.route('/').get((req, res) => {
   res.sendFile(__dirname + `/views/${req.url}`)
})

app.all('*', (req, res) => {
   res.send(`<h2>The requested route <i>${req.url}</i> was not found</h2>`)
})

app.listen(process.env.PORT, () => {
   console.log(`Server is listening on port ${process.env.PORT}`)
})
