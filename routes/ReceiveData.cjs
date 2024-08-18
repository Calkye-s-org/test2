const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Require functions 
const UpdateUserData = require('../Modules/UpdateUserData.cjs')
const CreateNewUser = require('../Modules/CreateNewUser.cjs')

const StoredPlayerData = require('../Position.cjs');
const url = 'mongodb+srv://Password2:Password2@cluster0.gumla4o.mongodb.net/RobloxDataStore?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(url)

router.post('/', async (req, res) => {
  console.log("Received data:", req.body);
  try {
    const RobloxPlayerData = req.body;
    const RobloxPlayerBank = RobloxPlayerData.Bank;
    const RobloxPlayerName = RobloxPlayerData.playerName;

    let UserExitsInDataBase = await StoredPlayerData.findOne({ playerName: RobloxPlayerName });

    if (UserExitsInDataBase !== null && UserExitsInDataBase !== undefined) {
      await UpdateUserData(UserExitsInDataBase.playerName, RobloxPlayerBank);
      console.log(RobloxPlayerData);
      res.status(200).send(`User ${RobloxPlayerName}'s Bank was updated`);
    } else {
      await CreateNewUser(RobloxPlayerName, RobloxPlayerBank);
      console.log(RobloxPlayerData);
      res.status(200).send(`User ${RobloxPlayerName} didn't exist in Database so made a new document for the User`);
    }

  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
