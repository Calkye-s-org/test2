const StoredPlayerData = require('../Position.cjs');


async function FindUser(Username){
  const User = await StoredPlayerData.findOne(
    {playerName: Username}
  )
  return User
}

module.exports = FindUser;