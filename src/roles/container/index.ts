import { IRolesRepository } from '@roles/repositories/IRolesRepository'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { CreateRolesController } from '@roles/useCases/createRole/CreateRolesController'
import { DeleteRolesController } from '@roles/useCases/deleteRoles/DeleteRolesController'
import { ListRolesController } from '@roles/useCases/listRoles/ListRolesController'
import { ShowRolesController } from '@roles/useCases/showRoles/ShowRolesController'
import { UpdateRolesUseCase } from '@roles/useCases/updateRoles/UpdateRolesUseCase'
import { container } from 'tsyringe'

container.registerSingleton<IRolesRepository>(
  'RolesRepository',
  RolesRepository,
)
container.registerSingleton('CreateRoleController', CreateRolesController)
container.registerSingleton('ListRolesController', ListRolesController)
container.registerSingleton('ShowRolesController', ShowRolesController)
container.registerSingleton('UpdateRolesUseCase', UpdateRolesUseCase)
container.registerSingleton('DeleteRolesController', DeleteRolesController)
