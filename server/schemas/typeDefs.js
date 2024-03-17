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
        ingredients: [Ingredient]!
        instructions: String
    }

    type Ingredient {
        _id: ID
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
        ingredient11: String
        ingredient12: String
        ingredient13: String
        ingredient14: String
        ingredient15: String
        ingredient16: String
        ingredient17: String
        ingredient18: String
        ingredient19: String
        ingredient20: String
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
        addRecipe(recipeTitle: String!, description: String!, ingredients: [Ingredient]!, instructions: String!): Recipe
        removeRecipe(recipeId: ID!): Recipe
    }
`;

module.exports = typeDefs;