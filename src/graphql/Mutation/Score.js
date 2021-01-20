const Score = require('../../models/Score')

const addScore = async (obj, { input }) => {
  try {
    const insertQuestion = await Score.query().insert(input).returning('*')
    return insertQuestion
  } catch (err) {
    throw new Error('Could not insert score.')
  }
}

const resolver = {
  Mutation: {
    addScore,
  },
}

module.exports = resolver
