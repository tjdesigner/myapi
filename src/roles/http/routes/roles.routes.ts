import { createRolesController } from '@roles/useCases/createRole'
import { listRolesController } from '@roles/useCases/listRoles'
import { showRolesController } from '@roles/useCases/showRoles'
import { updateRolesController } from '@roles/useCases/updateRoles'
import { Router } from 'express'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  createRolesController.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  return listRolesController.handle(request, response)
})

rolesRouter.get('/:id', (request, response) => {
  return showRolesController.handle(request, response)
})

rolesRouter.put('/:id', (request, response) => {
  return updateRolesController.handle(request, response)
})

export { rolesRouter }
