import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteRolesUseCase } from './DeleteRolesUseCase'
export class DeleteRolesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteRolesUseCase = container.resolve(DeleteRolesUseCase)
    const { id } = request.params
    await deleteRolesUseCase.execute({ id })
    return response.status(204).send()
  }
}
