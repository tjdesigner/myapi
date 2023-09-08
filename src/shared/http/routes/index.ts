import { AppError } from '@shared/erros/AppError'
import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new AppError('Acesso negado!')
  return response.json({ message: 'Olá dev' })
})

export { routes }
