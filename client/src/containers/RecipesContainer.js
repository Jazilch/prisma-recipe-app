'use es6';

import React, { useState } from 'react';
import { Query } from 'react-apollo';
import RecipeCard from '../components/RecipeCard';
import ModalsContainer from './ModalsContainer';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';
import { formInitialState } from '../utils/stateUtils';

const RecipesContainer = () => {
  const [activeId, setActiveId] = useState(0);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [formState, setFormState] = useState(formInitialState);
  const toggleViewModal = () => setViewModalOpen(!viewModalOpen);
  const toggleEditModal = () => setEditModalOpen(!editModalOpen);

  const handleViewModal = id => {
    setViewModalOpen(!viewModalOpen);
    setActiveId(id);
  };

  const handleEditModal = ({ id, directions, ingredients, title }) => {
    setEditModalOpen(!editModalOpen);
    setFormState({
      form: {
        id,
        directions,
        ingredients,
        title
      }
    });
  };

  const handleChange = event => {
    event.persist();

    setFormState(prevState => {
      return {
        form: {
          ...prevState.form,
          [event.target.name]: event.target.value
        }
      };
    });
  };

  return (
    <React.Fragment>
      <Query query={GetAllRecipes}>
        {({ loading, data: { recipes } }) => (
          <RecipeCard
            loading={loading}
            recipes={recipes}
            handleViewModal={handleViewModal}
            handleEditModal={handleEditModal}
          />
        )}
      </Query>
      <ModalsContainer
        activeId={activeId}
        viewModalOpen={viewModalOpen}
        toggleViewModal={toggleViewModal}
        formState={formState}
        handleChange={handleChange}
        editModalOpen={editModalOpen}
        toggleEditModal={toggleEditModal}
      />
    </React.Fragment>
  );
};

export default RecipesContainer;
