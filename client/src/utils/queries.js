import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      recipes {
        _id
        recipeTitle
        createdAt
        description
        ingredient1
        ingredient2
        ingredient3
        ingredient4
        ingredient5
        ingredient6
        ingredient7
        ingredient8
        ingredient9
        ingredient10
        instructions
      }
    }
  }
`;

export const QUERY_RECIPES = gql`
  query getRecipes {
    recipes {
        _id
        recipeTitle
        recipeAuthor
        createdAt
        description
        ingredient1
        ingredient2
        ingredient3
        ingredient4
        ingredient5
        ingredient6
        ingredient7
        ingredient8
        ingredient9
        ingredient10
        instructions
    }
  }
`;

export const QUERY_SINGLE_RECIPE = gql`
  query getSingleRecipe($recipeId: ID!) {
    recipe(recipeId: $recipeId) {
        _id
        recipeTitle
        recipeAuthor
        createdAt
        description
        ingredient1
        ingredient2
        ingredient3
        ingredient4
        ingredient5
        ingredient6
        ingredient7
        ingredient8
        ingredient9
        ingredient10
        instructions
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      recipes {
        _id
        recipeTitle
        recipeAuthor
        createdAt
        description
        ingredient1
        ingredient2
        ingredient3
        ingredient4
        ingredient5
        ingredient6
        ingredient7
        ingredient8
        ingredient9
        ingredient10
        instructions
      }
    }
  }
`;