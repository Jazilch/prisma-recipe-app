'use es6';

import React, { useState } from 'react';
import { Query } from 'react-apollo';
import RecipeCard from '../components/RecipeCard';
import ModalsContainer from './ModalsContainer';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';
import { formInitialState } from '../utils/stateUtils';
import { StyledAddButton } from '../components/style';

const RecipesContainer = () => {
  const [activeId, setActiveId] = useState(0);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [formState, setFormState] = useState(formInitialState);

  const handleResetState = () => {
    setFormState({ ...formInitialState });
  };

  const handleViewModal = id => {
    setActiveId(id);
    setViewModalOpen(!viewModalOpen);
  };

  const handleEditModal = ({
    id,
    directions,
    ingredients,
    title,
    published
  }) => {
    setEditModalOpen(!editModalOpen);
    setFormState({
      form: {
        id,
        directions,
        ingredients,
        title,
        published
      }
    });
  };

  const handleAddModal = () => {
    handleResetState();
    setAddModalOpen(!addModalOpen);
  };

  const handleInputChange = event => {
    event.persist();
    setFormState(prevState => ({
      form: {
        ...prevState.form,
        [event.target.name]: event.target.value
      }
    }));
  };

  const handleChecked = checked => {
    setFormState(prevState => ({
      form: { ...prevState.form, published: checked }
    }));
  };

  const handleDeletePopup = ({
    id,
    directions,
    ingredients,
    title,
    published
  }) => {
    setFormState({
      form: {
        id,
        directions,
        ingredients,
        title,
        published
      }
    });
  };

  return (
    <React.Fragment>
      <Query query={GetAllRecipes}>
        {({ loading, data: { recipes } }) => (
          <React.Fragment>
            <RecipeCard
              loading={loading}
              recipes={recipes}
              formState={formState}
              handleViewModal={handleViewModal}
              handleEditModal={handleEditModal}
              handleDeletePopup={handleDeletePopup}
            />
            <StyledAddButton
              type="primary"
              shape="circle"
              icon="plus"
              size="large"
              onClick={handleAddModal}
            />
          </React.Fragment>
        )}
      </Query>
      <ModalsContainer
        activeId={activeId}
        formState={formState}
        handleInputChange={handleInputChange}
        handleChecked={handleChecked}
        viewModalOpen={viewModalOpen}
        editModalOpen={editModalOpen}
        addModalOpen={addModalOpen}
        setViewModalOpen={setViewModalOpen}
        setEditModalOpen={setEditModalOpen}
        setAddModalOpen={setAddModalOpen}
      />
    </React.Fragment>
  );
};

export default RecipesContainer;
