const defaultPort = 4000

export interface Environment {
  apollo: {
    introspection: boolean | boolean
    playground: boolean | boolean
  }
  port: number | string
}

console.log('int:' + process.env.APOLLO_INTROSPECTION)
console.log('pg:' + process.env.APOLLO_PLAYGROUND)

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true'
  },
  port: process.env.PORT || defaultPort
}
