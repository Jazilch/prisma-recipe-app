import { gql } from 'apollo-boost';

export default gql`
  mutation UpdateRecipe(
    $id: ID!
    $directions: String!
    $title: String!
    $ingredients: String!
  ) {
    updateRecipe(
      where: { id: $id }
      data: {
        directions: $directions
        title: $title
        ingredients: $ingredients
      }
    ) {
      id
    }
  }
`;
