import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

const dragonball = []

servidor.get('/dragonball', (req, res) => {
    res.send(dragonball)
})

servidor.post('/dragonball', (req, res) => {
    const dragonball = req.body
    dragonball.push(dragonball)

    res.send('deus da destruição registrado')
})

servidor.listen(3000, () => {console.log('destruicao causada')})
