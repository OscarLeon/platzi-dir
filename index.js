'use strict'

const { buildSchema } = require('graphql')

const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')



const app = express()
const port = process.env.PORT || 3000

// Define the schema
const schema = buildSchema(readFileSync(join(__dirname, 'lib', 'schema.graphql',), 'utf-8'))

// Execute query hello

app.use('/api', graphqlHTTP({ schema, rootValue: resolvers, graphiql: true }))

app.listen(port, () => {
    console.log(`Server is listening at http:localhost:${port}/api`)
})
