import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RECIPE = gql`
  mutation addRecipe($recipeTitle: String!, $description: String!, $ingredient1: String!, $ingredient2: String!, $ingredient3: String!, $ingredient4: String!, $ingredient5: String!, $ingredient6: String!, $ingredient7: String!, $ingredient8: String!, $ingredient9: String!, $ingredient10: String!, $instructions: String!) {
    addRecipe(recipeTitle: $recipeTitle, description: $description, ingredient1: $ingredient1, ingredient2: $ingredient2, ingredient3: $ingredient3, ingredient4: $ingredient4, ingredient5: $ingredient5, ingredient6: $ingredient6, ingredient7: $ingredient7, ingredient8: $ingredient8, ingredient9: $ingredient9, ingredient10: $ingredient10, instructions: $instructions) {
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