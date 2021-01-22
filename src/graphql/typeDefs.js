const { gql } = require('apollo-server-express')

module.exports = gql`

  type Query {
    allUsers: [User!]!
    userById(id: ID!): User!
    allCategories: [Category!]!
    categoryById(id: ID!): Category!
    allQuestions: [Question!]!
    questionById(id: ID!): Question!
    allScores: [Score!]!
    scoreById(id: ID!): Score!
    leaderboardByCategory(categoryId: ID!): [User!]!
    randomQuestionByCategory(categoryId: ID!): Question!
  }

  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    addUser(input: userInput!): User!
    addQuestion(input: questionInput!): Question!
    addScore(input: scoreInput): Score!
    addCategory(input: categoryInput!): Category!
    updateScore(userId: ID!, categoryId: ID!, score: Int!): Score!
  }

  type User {
    id: ID!
    email: String!
    createdAt: Date!
    updatedAt: Date!
    username: String!
    password: String!
    firstName: String!
    lastName: String!
    accuracy: Float
    gamesPlayed: Int 
    scores: [Score!]
    scoreByCategory(categoryId: ID!): Score!
  }

  input userInput {
    email: String!
    username: String!
    password: String!
    firstName: String!
    lastName: String! 
  }

  type Category {
    id: ID! 
    title: String!
    description: String!
    type: String! 
    popularity: Float
    difficulty: Float! 
    questions: [Question!]
  }

  input categoryInput {
    title: String!
    description: String!
    type: String! 
    difficulty: Float!
  }

  type Question {
    id: ID!
    categoryId: ID!
    question: String!
    answerMinimum: Int!
    answerMaximum: Int!
    popularity: Float 
    difficulty: Float! 
  }

  input questionInput {
    categoryId: ID!
    question: String!
    answerMinimum: Int!
    answerMaximum: Int!
    difficulty: Float! 
  }

  type Score {
    id: ID!
    userId: ID!
    categoryId: ID!
    score: Float!
    timeScored: Date!
  }

  input scoreInput {
    userId: ID!
    categoryId: ID!
    score: Float!
    timeScored: Date!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input RegisterInput {
    email: String!
    password: String!
  }

  scalar Date
`
