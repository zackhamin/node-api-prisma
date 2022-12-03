import express from 'express'
const app = express()

app.get('/', (req, res) => {
console.log("Hello")
    res.status(200)
    res.json({message: 'Hello'})
})

export {app}