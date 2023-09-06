import express from 'express'
import cors from 'cors'

import 'express-async-errors'

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ message: 'Olá dev' })
})

app.listen(3000, () => {
  console.log('Server started on port 3000!🚀')
})
