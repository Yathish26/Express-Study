

import express from 'express'
import fs from 'fs'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.sendFile('index.html', { root: 'public' })
})

app.post('/add', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required' });
    }
    try {
        const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
        data.push({ name, id: Date.now() }); // add id for uniqueness
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
        res.json({ message: 'Added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add data' });
    }
})

app.get('/:id',(req,res) => {
    const data = req.params.id
    res.send(data)

})

app.listen(port,() =>{
    console.log('Server running on port', port)
})