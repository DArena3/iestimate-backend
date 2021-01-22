const casual = require('casual')
const Question = require('../../models/Question')

const allQuestions = async () => {
  try {
    const query = await Question.query()
    return query
  } catch (err) {
    throw new Error('Could not resolve questions query.')
  }
}

const questionById = async (obj, { id }) => {
  try {
    const query = await Question.query().where('id', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve question by id query.')
  }
}

const randomQuestionByCategory = async (obj, { categoryId }) => {
  try {
    const query = await Question.query().where('categoryId', categoryId)
    return casual.random_element(query)
  } catch (err) {
    throw new Error('Could not resolve question by id query.')
  }
}

const resolver = {
  Query: {
    allQuestions,
    questionById,
    randomQuestionByCategory,
  },
}

module.exports = resolver
