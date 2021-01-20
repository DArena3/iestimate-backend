const Question = require('../../models/Question')

const addQuestion = async (obj, { input }) => {
  try {
    const insertQuestion = await Question.query().insert(input).returning('*')
    return insertQuestion
  } catch (err) {
    throw new Error('Could not insert question.')
  }
}

const resolver = {
  Mutation: {
    addQuestion,
  },
}

module.exports = resolver
