const router = require('express').Router()
const Product = require('../models/Product')
const account = require('../models/Account');


router.get("/", async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json({ product: product })
    } catch (error) {
        res.status(400).json({ error })
    }
})

router.post("/newProduct", async (req, res) => {
    const { name, price, description } = req.body

    if (name == null || price == null || description == null) {
        return res.status(400).json({ message: 'necessário preencher todos os campos!' })
    }

    const product = {
        name,
        price,
        description
    }

    try {
        await Product.create(product)
        res.status(200).json({ message: 'Tudo certo!!' })
    } catch (error) {
        res.status(400).json({ message: error })
    }
})

router.post("/newUser", async (req, res) => {
    let { fullName, 
          birth, 
          socialName, 
          email, 
          password } = req.body

    const user = {
        fullName,
        birth,
        socialName,
        email,
        password
    }

    try {
        await account.create(user)
        return res.status(201).json({
            message: "Account created sucessfull <3."
        })
    } catch (error) {
        return res.status(400).json({
            message: "error to created account!"
        })        
    }
})

router.get('')

module.exports = router

