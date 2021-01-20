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

const resolver = {
  Query: {
    allScores,
    scoreById,
  },
}

module.exports = resolver
