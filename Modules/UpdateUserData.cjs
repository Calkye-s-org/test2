const StoredPlayerData = require('../Position.cjs')


async function UpdateUserData(Username, Data) {
  const UpdatedUser = await StoredPlayerData.findOneAndUpdate(
    { playerName: Username },
    { $set: { Bank: Data } },
    { new: false }
  );
  return UpdatedUser;
}


module.exports = UpdateUserData;