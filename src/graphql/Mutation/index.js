const merge = require('lodash.merge')
const Auth = require('./Auth')
const User = require('./User')
const Category = require('./Category')
const Score = require('./Score')
const Question = require('./Question')

const resolvers = [Auth, User, Category, Score, Question]

module.exports = merge(...resolvers)
