
const StoredPlayerData = require('../Position.cjs')

async function CreateNewUser(Username, Data) {
  const NewUser = await StoredPlayerData.create({ playerName: Username, Bank: Data });
  return NewUser;
}

module.exports  = CreateNewUser