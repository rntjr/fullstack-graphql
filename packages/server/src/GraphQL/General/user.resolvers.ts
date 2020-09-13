import { User, Prisma__UserClient } from '@prisma/client'
import { IResolvers } from 'graphql-tools'
import { ExpressContext } from '../context'

const resolvers: IResolvers = {
  Query: {
    getUsers(_: void, args: void, ctx: ExpressContext): Promise<User[]> {
      return ctx.prisma.user.findMany()
    },
    getUser(
      _: void,
      args: void,
      ctx: ExpressContext
    ): Prisma__UserClient<User | null> {
      return ctx.prisma.user.findOne({ where: { id: 1 } })
    }
  }
}

export default resolvers
