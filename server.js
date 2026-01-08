

import express from 'express'

const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send('hello pihuu')
})

app.get('/:id',(req,res) => {
    const data = req.params.id
    res.send(data)

})

app.listen(port,() =>{
    console.log('is this works')
})