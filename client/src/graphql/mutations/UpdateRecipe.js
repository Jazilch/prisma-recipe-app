import { gql } from 'apollo-boost';

export default gql`
  mutation UpdateRecipe(
    $id: ID!
    $directions: String!
    $title: String!
    $ingredients: String!
    $published: Boolean
    $favorited: Boolean
  ) {
    updateRecipe(
      where: { id: $id }
      data: {
        directions: $directions
        title: $title
        ingredients: $ingredients
        published: $published
        favorited: $favorited
      }
    ) {
      id
    }
  }
`;
