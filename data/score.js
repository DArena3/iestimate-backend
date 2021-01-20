const casual = require('casual')
const userData = require('./user')
const categoryData = require('./category')

casual.define('score', ({ userId, categoryId }) => ({
  id: casual.uuid,
  userId,
  categoryId,
  score: casual.integer(0, 1000),
}))

const scoreData = []

for (let i = 0; i < 30; ++i) {
  const userId = casual.random_element(userData).id
  const categoryId = casual.random_element(categoryData).id
  scoreData.push(casual.score({ userId, categoryId }))
}

module.exports = scoreData
