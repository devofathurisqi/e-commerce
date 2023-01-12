const router = require("express").Router()
const {UserControllers} = require ("../controllers")

const {verifyToken} = require("../middleware/VerifyToken.js")




router.post("/regristasi",UserControllers.register)
router.get("/findallproduct",UserControllers.getAllProduct)
router.post("/login",UserControllers.login)
router.delete("/logout",UserControllers.logout)
router.get("/getuser",verifyToken,UserControllers.getAllUsers)




module.exports = router