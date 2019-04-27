'use es6';

import React from 'react';
import { Mutation } from 'react-apollo';
import { Modal, Spin, Form, Input } from 'antd';
import UpdateRecipe from '../graphql/mutations/UpdateRecipe';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';
import {
  showSuccessNotification,
  showErrorNotification
} from '../utils/notificationUtils';

const formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 14 } };

const EditModal = ({
  data,
  loading,
  formState,
  handleChange,
  editModalOpen,
  toggleEditModal
}) => (
  <Mutation
    mutation={UpdateRecipe}
    refetchQueries={[
      {
        query: GetAllRecipes
      }
    ]}
    onCompleted={() => showSuccessNotification()}
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
              title: formState.form.title
            }
          });
          toggleEditModal();
        }}
        onCancel={toggleEditModal}
      >
        {loading && <Spin />}
        <Form layout="horizontal">
          <Form.Item label="Title" {...formItemLayout}>
            <Input
              value={formState.form.title}
              onChange={handleChange}
              name="title"
            />
          </Form.Item>
          <Form.Item label="Ingredients" {...formItemLayout}>
            <Input.TextArea
              value={formState.form.ingredients}
              rows={6}
              onChange={handleChange}
              name="ingredients"
            />
          </Form.Item>
          <Form.Item label="Directions" {...formItemLayout}>
            <Input.TextArea
              value={formState.form.directions}
              rows={10}
              onChange={handleChange}
              name="directions"
            />
          </Form.Item>
        </Form>
      </Modal>
    )}
  </Mutation>
);

export default EditModal;
