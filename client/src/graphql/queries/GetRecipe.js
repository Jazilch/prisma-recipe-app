import { gql } from 'apollo-boost';

export default gql`
  query GetRecipe($recipeId: ID!) {
    recipe(where: { id: $recipeId }) {
      id
      createdAt
      title
      directions
      ingredients
      published
      favorited
    }
  }
`;
