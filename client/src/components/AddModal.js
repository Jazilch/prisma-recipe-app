'use es6';

import React from 'react';
import { Mutation } from 'react-apollo';
import { Modal, Spin } from 'antd';
import AddRecipe from '../graphql/mutations/CreateRecipe';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';
import {
  showSuccessNotification,
  showErrorNotification
} from '../utils/notificationUtils';
import ModalForm from './ModalForm';

const AddModal = ({
  loading,
  formState,
  handleInputChange,
  handleChecked,
  addModalOpen,
  setAddModalOpen
}) => (
  <Mutation
    mutation={AddRecipe}
    refetchQueries={[
      {
        query: GetAllRecipes
      }
    ]}
    onCompleted={() => showSuccessNotification('Successfully added recipe')}
    onError={() => showErrorNotification()}
  >
    {addRecipe => (
      <Modal
        title="Add your new recipe"
        visible={addModalOpen}
        onOk={e => {
          e.preventDefault();
          addRecipe({
            variables: {
              directions: formState.form.directions,
              ingredients: formState.form.ingredients,
              title: formState.form.title,
              published: formState.form.published
            }
          });
          setAddModalOpen(!addModalOpen);
        }}
        onCancel={() => setAddModalOpen(!addModalOpen)}
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

export default AddModal;
