const db = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports = {
    register: async (req, res) => {
        const { email, username, password, phone_number, confirmPassword } = req.body

        if (password !== confirmPassword) return res.status(400).send("password must be same with confirm Password")
        if (password.length < 8) return res.status(400).send("Password min 8 character");

        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);
        
        try {
            await db.User.create({
                username,
                email,
                phone_number,
                password: hashPass,
            });
            res.status(201).send("User Created")

        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    getAllProduct: async (req, res) => {
        try {
            const result = await db.Products.findAll()
            res.status(200).send(result)
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
    login: async (req, res) => {
        try {
            const user = await db.User.findAll({
                where: {
                    username: req.body.username
                }
            })
            const match = await bcrypt.compare(req.body.password, user[0].password)
            if (!match) return res.status(400).send("Wrong Password")
            const userId = user[0].id
            const username = user[0].username
            const email = user[0].email

            const accessToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET)
            await db.User.update({ refresh_token: accessToken}, {
                where: {
                    id: userId
                }
            })
            res.status(200).send({ accessToken })
        } catch (err) {
            console.log(err)
            res.status(404).send("username tidak di temukan")
        }
    },
    logout: async (req, res) => {
        const accessToken = req.accessToken
        const user = await db.User.findAll({
            where:{
                refresh_token: accessToken
            }
        })
        if(!user[0]) return res.sendStatus(204)
        const userId = user[0].id
        await db.User.update({refresh_token: null},{
            where: {
                id : userId
            }
        })
        return res.sendStatus(200)
    },
    getAllUsers: async (req, res) => {
        try {
            const result = await db.User.findAll({
                attributes: [
                    "id",
                    "username",
                    "email"
                ]
            })
            res.status(200).send(result)
        } catch (err) {
            console.log(err)
            res.status(404).send(err)
        }
    },
}