'use es6';

import React from 'react';
import { Mutation } from 'react-apollo';
import { Icon, Popconfirm } from 'antd';
import UpdateRecipe from '../graphql/mutations/UpdateRecipe';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';

const CardIcons = ({
  recipe: { id, directions, ingredients, title, published },
  formState,
  handleEditModal,
  handleDeletePopup
}) => (
  <Mutation
    mutation={UpdateRecipe}
    refetchQueries={[
      {
        query: GetAllRecipes
      }
    ]}
  >
    {updateRecipe => (
      <React.Fragment>
        <span>
          <Icon
            type="edit"
            style={{ color: '#08c' }}
            onClick={() =>
              handleEditModal({
                id,
                directions,
                ingredients,
                title,
                published
              })
            }
          />
          <Popconfirm
            title="Are you sure？"
            onClick={() =>
              handleDeletePopup({
                id,
                directions,
                ingredients,
                title,
                published
              })
            }
            onConfirm={() =>
              updateRecipe({
                variables: {
                  id: formState.form.id,
                  directions: formState.form.directions,
                  ingredients: formState.form.ingredients,
                  title: formState.form.title,
                  published: false
                }
              })
            }
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
          >
            <Icon
              type="delete"
              theme="twoTone"
              style={{ marginLeft: '12px' }}
            />
          </Popconfirm>
        </span>
      </React.Fragment>
    )}
  </Mutation>
);

export default CardIcons;
