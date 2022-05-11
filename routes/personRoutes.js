const router = require('express').Router()

const { route } = require('express/lib/application')
const Person = require('../models/Person')

router.post('/', async (req, res) => {
    const {name, salary, approved} = req.body // destructuring

    if(!name) {
        res.status(422).json({error: 'O nome é obrigatório.'})
        return
    }

    const person = {
        name,
        salary,
        approved,
    }

    try {
        await Person.create(person)
        res.status(201).json({message: 'Usuário criado com sucesso!'})
    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/', async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) => {
    // extrair dado da req pela url - req.params
    const id = req.params.id
    try {
        const person = await Person.findOne({_id: id})
        if(!person) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/:id', async(req, res) => {
    const id = req.params.id
    const {name, salary, approved} = req.body
    const person = {
        name,
        salary,
        approved,
    }

    try {
        const updatedPerson = await Person.updateOne({_id: id}, person)
        if (updatedPerson.matchedCount === 0) {
            res.status(422).json({message: 'O usuário não foi encontrado!'})
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const person = await Person.findOne({_id: id})

    if(!person) {
        res.status(422).json({message: 'O usuário não foi encontrado!'})
        return
    }

    try {
        await Person.deleteOne({_id: id})
        res.status(200).json({message: 'Usuário removido com sucesso!'})
    } catch (error) {
        res.status(500).json({error: error})    
    }
})

router.delete('/person/', async (req, res)=> {
    try {
        await Person.remove({message: 'Todos os usuários foram removidos.'})
    } catch (error) {
        res.status(500).json({error: error}) 
    }
})

module.exports = router