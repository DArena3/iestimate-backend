const Score = require('../../models/Score')

const allScores = async () => {
  try {
    const query = await Score.query()
    return query
  } catch (err) {
    throw new Error('Could not resolve scores query.')
  }
}

const scoreById = async (obj, { id }) => {
  try {
    const query = await Score.query().where('id', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve score by id query.')
  }
}

const updateScore = async (obj, { userId, categoryId, score }) => {
  try {
    const query = await Score.query().update({ score }).where({ userId, categoryId }).returning('*')
    return query[0]
  } catch (err) {
    throw new Error('Could not update score for the user')
  }
}

const resolver = {
  Query: {
    allScores,
    scoreById,
  },
  Mutation: {
    updateScore,
  },
}

module.exports = resolver
