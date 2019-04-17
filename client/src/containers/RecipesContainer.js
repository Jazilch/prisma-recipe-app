'use es6';

import React from 'react';
import { Query } from 'react-apollo';
import RecipeCard from '../components/RecipeCard';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';

const RecipesContainer = () => (
  <Query query={GetAllRecipes}>
    {({ loading, data: { recipes } }) => (
      <RecipeCard loading={loading} recipes={recipes} />
    )}
  </Query>
);

export default RecipesContainer;
