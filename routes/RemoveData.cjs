const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');


const url = 'mongodb+srv://Password2:Password2@cluster0.gumla4o.mongodb.net/RobloxDataStore?retryWrites=true&w=majority&appName=Cluster0';

// Require the functions 
const CreateNewUser = require('../Modules/CreateNewUser.cjs')
const UpdateUserData = require('../Modules/UpdateUserData.cjs')
const FindUser = require('../Modules/Finduser.cjs')

mongoose.createConnection(url)

router.post('/', async(req, res)=>{
  try{
    const RobloxPlayerData = req.body; 
    const RobloxPlayerName = req.body.playerName
    const RobloxPlayerBank = req.body.Bank

    const StoredUser = await FindUser(RobloxPlayerName)

    if(StoredUser !== null && StoredUser !== undefined){
      console.log(StoredUser.Bank - RobloxPlayerBank )
      const Data = StoredUser.Bank - RobloxPlayerBank
      res.status(200).send({Bank: Data})
      const UpdatedUserData = await UpdateUserData(RobloxPlayerName, Data)
      console.log(UpdatedUserData)
    }


  }catch(error){
    res.status(500).send(error.message)
  }
})




module.exports = router