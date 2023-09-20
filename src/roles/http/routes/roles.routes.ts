import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { container } from 'tsyringe'
import { CreateRolesController } from '@roles/useCases/createRole/CreateRolesController'
import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController'
import { ShowRolesController } from '@roles/useCases/showRoles/ShowRolesController'
import { UpdateRolesController } from '@roles/useCases/updateRoles/UpdateRolesController'
import { DeleteRolesController } from '@roles/useCases/deleteRoles/DeleteRolesController'

const rolesRouter = Router()

const createRolesController = container.resolve(CreateRolesController)
const listRolesController = container.resolve(ListRolesController)
const showRolesController = container.resolve(ShowRolesController)
const updateRolesController = container.resolve(UpdateRolesController)
const dleteRolesController = container.resolve(DeleteRolesController)

rolesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    createRolesController.handle(request, response)
  },
)

rolesRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      limit: Joi.number(),
    }),
  }),
  (request, response) => {
    return listRolesController.handle(request, response)
  },
)

rolesRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return showRolesController.handle(request, response)
  },
)

rolesRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
    }),
  }),
  (request, response) => {
    return updateRolesController.handle(request, response)
  },
)

rolesRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().uuid().required(),
    }),
  }),
  (request, response) => {
    return dleteRolesController.handle(request, response)
  },
)

export { rolesRouter }
