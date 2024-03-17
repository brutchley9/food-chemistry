const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        recipes: [Recipe]!
    }

    type Recipe {
        _id: ID
        recipeTitle: String
        recipeAuthor: String
        createdAt: String
        description: String
        ingredient1: String
        ingredient2: String
        ingredient3: String
        ingredient4: String
        ingredient5: String
        ingredient6: String
        ingredient7: String
        ingredient8: String
        ingredient9: String
        ingredient10: String
        instructions: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        recipes(username: String): [Recipe]
        recipe(recipeId: ID!): Recipe
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addRecipe(recipeTitle: String!, description: String!, ingredient1: String!, ingredient2: String!, ingredient3: String!, ingredient4: String!, ingredient5: String!, ingredient6: String!, ingredient7: String!, ingredient8: String!, ingredient9: String!, ingredient10: String!, instructions: String!): Recipe
        removeRecipe(recipeId: ID!): Recipe
    }
`;

module.exports = typeDefs;