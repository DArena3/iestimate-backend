const Category = require('../../models/Category')
const Question = require('../../models/Question')

const allCategories = async () => {
  try {
    const query = await Category.query()
    return query
  } catch (err) {
    throw new Error('Could not resolve categories query.')
  }
}

const categoryById = async (obj, { id }) => {
  try {
    const query = await Category.query().where('id', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve category by id query.')
  }
}

const questions = async ({ id }) => {
  try {
    const query = await Question.query().where('categoryId', id)
    return query
  } catch (err) {
    throw new Error('Could not resolve the category\'s question query.')
  }
}

const resolver = {
  Query: {
    allCategories,
    categoryById,
  },
  Category: {
    questions,
  },
}

module.exports = resolver
