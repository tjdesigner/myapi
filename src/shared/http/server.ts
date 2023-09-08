import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import 'express-async-errors'
import { routes } from './routes'
import { AppError } from '../erros/AppError'

const app = express()
app.use(cors())

app.use(express.json())
app.use(routes)
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response
        .status(error.statusCode)
        .json({ status: 'error', message: error.message })
    }
    console.log(error)
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}!🚀`)
})