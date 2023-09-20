import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateRolesUseCase } from './CreateRolesUseCase'

export class CreateRolesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createRolesUseCase = container.resolve(CreateRolesUseCase)
    const { name } = request.body
    const role = await createRolesUseCase.execute({ name })

    return response.status(201).json(role)
  }
}
