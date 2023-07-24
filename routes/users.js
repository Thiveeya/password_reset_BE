





 const {getUser,getUserRestrictData,saveUser,resetPassword,passwordUpdate}=require('../controller/usercontroller')

const router=require('express').Router();

router.get('/',getUserRestrictData)
router.get('/users',getUser)
router.post('/createuser',saveUser)
router.put('/forgotpassword',resetPassword)
router.put('/passwordreset/:id',passwordUpdate)
 
module.exports=router; 