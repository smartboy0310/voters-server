require('dotenv').config()
const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 7000
const modules = require('./modules')

const server = new ApolloServer({
   modules
})

server.applyMiddleware({ app })

app.listen(PORT, console.log(PORT))