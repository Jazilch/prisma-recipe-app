import { gql } from 'apollo-boost';

export default gql`
  mutation UpdateRecipe($id: String!) {
    updateRecipe(id: $id) {
      id
    }
  }
`;
