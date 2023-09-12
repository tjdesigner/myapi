import { DataSource } from 'typeorm'
import { CreateRolesTable1694486577889 } from './migrations/1694486577889-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1694486577889],
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
