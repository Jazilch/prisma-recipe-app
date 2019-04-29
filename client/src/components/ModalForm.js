'use es6';

import React from 'react';
import { Form, Input, Switch } from 'antd';

const formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 14 } };

const ModalForm = ({ formState, handleInputChange, handleChecked }) => (
  <Form layout="horizontal">
    <Form.Item label="Title" {...formItemLayout}>
      <Input
        value={formState.form.title}
        placeholder="Enter your title here"
        onChange={handleInputChange}
        name="title"
      />
    </Form.Item>
    <Form.Item label="Ingredients" {...formItemLayout}>
      <Input.TextArea
        value={formState.form.ingredients}
        placeholder="Enter your ingredients"
        rows={6}
        onChange={handleInputChange}
        name="ingredients"
      />
    </Form.Item>
    <Form.Item label="Directions" {...formItemLayout}>
      <Input.TextArea
        value={formState.form.directions}
        placeholder="Enter your directions"
        rows={10}
        onChange={handleInputChange}
        name="directions"
      />
    </Form.Item>
    <Form.Item label="Published" {...formItemLayout}>
      <Switch checked={formState.form.published} onChange={handleChecked} />
    </Form.Item>
  </Form>
);

export default ModalForm;
