import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [],
})

// export const dataSource = new DataSource({
//   type: 'mysql',
//   host: 'mysql.tjdeveloper.com.br',
//   port: 3306,
//   username: 'tjdeveloper',
//   password: 'myAPI2023',
//   database: 'tjdeveloper',
// })
