const User = require('../../models/User')
const Score = require('../../models/Score')

const allUsers = async () => {
  try {
    const query = await User.query()
    return query
  } catch (err) {
    throw new Error('Could not resolve users query.')
  }
}

const userById = async (obj, { id }) => {
  try {
    const query = await User.query().where('id', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve user by id query.')
  }
}

const leaderboardByCategory = async (obj, { categoryId }) => {
  try {
    const query = await User.query().withGraphJoined('scores').where('scores.categoryId', categoryId).orderBy('scores.score', 'desc')
    return query.slice(0, 10)
  } catch (err) {
    // console.log(err)
    throw new Error('Could not get the leaderboard.')
  }
}

const scores = async ({ id }) => {
  try {
    const query = await Score.query().where('userId', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve the user\'s score query.')
  }
}

const scoreByCategory = async ({ id }, { categoryId }) => {
  try {
    const query = await Score.query().findOne({ userId: id, categoryId })
    return query
  } catch (err) {
    // console.log(err)
    throw new Error('Could not resolve the user\'s score by category query.')
  }
}

const resolver = {
  Query: {
    allUsers,
    userById,
    leaderboardByCategory,
  },
  User: {
    scores,
    scoreByCategory,
  },
}

module.exports = resolver
