'use es6';

import React from 'react';
import { Mutation } from 'react-apollo';
import { Modal, Spin } from 'antd';
import UpdateRecipe from '../graphql/mutations/UpdateRecipe';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';
import {
  showSuccessNotification,
  showErrorNotification
} from '../utils/notificationUtils';
import ModalForm from './ModalForm';

const EditModal = ({
  data,
  loading,
  formState,
  handleInputChange,
  handleChecked,
  editModalOpen,
  setEditModalOpen
}) => (
  <Mutation
    mutation={UpdateRecipe}
    refetchQueries={[
      {
        query: GetAllRecipes
      }
    ]}
    onCompleted={() => showSuccessNotification('Successfully updated recipe')}
    onError={() => showErrorNotification()}
  >
    {updateRecipe => (
      <Modal
        title={data.recipe && data.recipe.title}
        visible={editModalOpen}
        onOk={e => {
          e.preventDefault();
          updateRecipe({
            variables: {
              id: formState.form.id,
              directions: formState.form.directions,
              ingredients: formState.form.ingredients,
              title: formState.form.title,
              published: formState.form.published
            }
          });
          setEditModalOpen(!editModalOpen);
        }}
        onCancel={() => setEditModalOpen(!editModalOpen)}
      >
        {loading && <Spin />}
        <ModalForm
          formState={formState}
          handleInputChange={handleInputChange}
          handleChecked={handleChecked}
        />
      </Modal>
    )}
  </Mutation>
);

export default EditModal;
