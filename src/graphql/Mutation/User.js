const User = require('../../models/User')
const Category = require('../../models/Category')
const Score = require('../../models/Score')

const addUser = async (obj, { input }) => {
  let insertUser
  let categories
  // insert the user
  try {
    insertUser = await User.query().insert(input).returning('*')
  } catch (err) {
    throw new Error('Could not insert user.')
  }
  // get all categories
  try {
    categories = await Category.query()
  } catch (err) {
    throw new Error('Could not get categories.')
  }
  // set user's scores for all categories to 0
  try {
    const initialScores = categories.map(category => ({
      userId: insertUser.id,
      categoryId: category.id,
      score: 0,
    }))
    await Score.query().insert(initialScores)
  } catch (err) {
    throw new Error('Could not insert initial scores.')
  }
  return insertUser
}

const resolver = {
  Mutation: {
    addUser,
  },
}

module.exports = resolver
