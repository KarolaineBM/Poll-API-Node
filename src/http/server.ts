import fastify from 'fastify'
import cookie from '@fastify/cookie'
import websocket from '@fastify/websocket'
import { pollResults } from './WS/poll-results'
import { getPoll } from './routes/get-poll'
import { createPoll } from './routes/create-poll'
import { voteOnPoll } from './routes/vote-on-poll'




 const app = fastify()

 app.register(cookie, {
  secret: "polls-app-nlw-aula", 
  hook: 'onRequest', 
 })

 app.register(getPoll)
 app.register(websocket)
 app.register(createPoll)
 app.register(voteOnPoll)
 app.register(pollResults)

app.listen({port: 3333}).then(()=>{
    console.log('HTTP server running!')
})