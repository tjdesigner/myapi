import { DataSource } from 'typeorm'
import { Role } from '@roles/entities/Role'
import { CreateRolesTable1694531657173 } from './migrations/1694531657173-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './database/db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1694531657173],
})

// export const dataSource = new DataSource({
//   type: 'mysql',
//   host: 'mysql.tjdeveloper.com.br',
//   port: 3306,
//   username: 'tjdeveloper',
//   password: 'myAPI2023',
//   database: 'tjdeveloper',
//   entities: [],
//   migrations: [CreateRolesTable1694487115306],
// })
