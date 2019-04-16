import { gql } from 'apollo-boost';

export default gql`
  query GetAllRecipes {
    recipes(where: { published: true }) {
      id
      createdAt
      title
      ingredients
      directions
      published
    }
  }
`;
