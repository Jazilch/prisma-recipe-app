'use es6';

import React from 'react';
import { Mutation } from 'react-apollo';
import { Modal, Spin, Form, Input, Switch } from 'antd';
import AddRecipe from '../graphql/mutations/CreateRecipe';
import GetAllRecipes from '../graphql/queries/GetAllRecipes';
import {
  showSuccessNotification,
  showErrorNotification
} from '../utils/notificationUtils';

const formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 14 } };

const AddModal = ({
  loading,
  formState,
  handleChange,
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
        <Form layout="horizontal">
          <Form.Item label="Title" {...formItemLayout}>
            <Input
              value={formState.form.title}
              placeholder="Enter your title here"
              onChange={handleChange}
              name="title"
            />
          </Form.Item>
          <Form.Item label="Ingredients" {...formItemLayout}>
            <Input.TextArea
              value={formState.form.ingredients}
              placeholder="Enter your ingredients"
              rows={6}
              onChange={handleChange}
              name="ingredients"
            />
          </Form.Item>
          <Form.Item label="Directions" {...formItemLayout}>
            <Input.TextArea
              value={formState.form.directions}
              placeholder="Enter your directions"
              rows={10}
              onChange={handleChange}
              name="directions"
            />
          </Form.Item>
          <Form.Item label="Published" {...formItemLayout}>
            <Switch
              checked={formState.form.published}
              onChange={handleChecked}
            />
          </Form.Item>
        </Form>
      </Modal>
    )}
  </Mutation>
);

export default AddModal;
