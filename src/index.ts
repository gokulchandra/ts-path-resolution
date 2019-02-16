require('module-alias/register')
import * as Koa from 'koa'
import * as Router from 'koa-route';

import {findById, getAllPersons} from '@/services/person'

const port: number = 3000

const startServer = async (): Promise<any> => {
  const app: Koa = new Koa()
  app.listen(port)

  app.use(Router.get('/persons/:id', (ctx, id) =>  {
       ctx.body = findById(id)
  }))

  app.use(Router.get('/persons', (ctx) =>  {
       ctx.body = getAllPersons()
  }))

  console.log(`Server running on port: ${port}`)
}

startServer()