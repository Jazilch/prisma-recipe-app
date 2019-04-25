'use es6';

import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { Modal } from 'antd';
import RecipeCard from '../components/RecipeCard';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';
import GetRecipe from '../graphql/queries/GetRecipe';

const RecipesContainer = () => {
  const [modalOpen, setModal] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const toggleModal = () => setModal(!modalOpen);

  const handleModal = id => {
    setModal(!modalOpen);
    setActiveId(id);
  };
  return (
    <React.Fragment>
      <Query query={GetAllRecipes}>
        {({ loading, data: { recipes } }) => (
          <RecipeCard
            loading={loading}
            recipes={recipes}
            handleModal={handleModal}
          />
        )}
      </Query>
      <React.Fragment>
        {modalOpen && (
          <Query query={GetRecipe} variables={{ recipeId: `${activeId}` }}>
            {({ data }) => {
              return (
                <Modal
                  title="Basic Modal"
                  visible={modalOpen}
                  onOk={toggleModal}
                  onCancel={toggleModal}
                >
                  {data.recipe && (
                    <div>
                      <h2>{data.recipe.title}</h2>
                      <p>{data.recipe.ingredients}</p>
                      <p>{data.recipe.directions}</p>
                    </div>
                  )}
                </Modal>
              );
            }}
          </Query>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default RecipesContainer;
