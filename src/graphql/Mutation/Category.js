const Category = require('../../models/Category')
const User = require('../../models/User')
const Score = require('../../models/Score')

const addCategory = async (obj, { input }) => {
  let insertCategory
  let users
  // insert the category
  try {
    insertCategory = await Category.query().insert(input)
  } catch (err) {
    throw new Error('Could not insert category.')
  }
  // get all users
  try {
    users = await User.query()
  } catch (err) {
    throw new Error('Could not get users.')
  }
  // set the scores of all users for this category to 0
  try {
    const initialScores = users.map(user => ({
      userId: user.id,
      categoryId: insertCategory.id,
      score: 0,
    }))
    await Score.query().insert(initialScores)
  } catch (err) {
    throw new Error('Could not insert initial scores.')
  }
  return insertCategory
}

const resolver = {
  Mutation: {
    addCategory,
  },
}

module.exports = resolver
