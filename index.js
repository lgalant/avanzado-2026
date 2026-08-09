import pkg from 'pg'
import dbconfig from './dbconfig.js'
import express from 'express'

const {Client} = pkg;
const client = new Client(dbconfig)
await client.connect()

const result = await client.query("SELECT * FROM usuario")
console.log(result.rows)

await client.end()

const app = express()
const port = 3000;
app.get('/',(req,res)=>res.send("Hello world"))
//app.listen(port,() => {console.log(`listening on http://localhost:${port}`)})