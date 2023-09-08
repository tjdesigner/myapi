import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import 'express-async-errors'

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'Olá dev' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}!🚀`)
})
