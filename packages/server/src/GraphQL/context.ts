import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface ExpressContext {
  req: express.Request;
  res: express.Response;
  prisma: PrismaClient;
}

const context = ({ req, res }: ExpressContext): ExpressContext => {
  return { req, res, prisma }
}

export default context
