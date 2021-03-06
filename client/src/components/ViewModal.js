'use es6';

import React from 'react';
import { Modal, Spin } from 'antd';

const ViewModal = ({ data, loading, viewModalOpen, setViewModalOpen }) => (
  <Modal
    title={data.recipe && data.recipe.title}
    visible={viewModalOpen}
    onOk={() => setViewModalOpen(!viewModalOpen)}
    onCancel={() => setViewModalOpen(!viewModalOpen)}
  >
    {loading && <Spin />}
    {data.recipe && (
      <div>
        <h3>Ingredients</h3>
        <p>{data.recipe.ingredients}</p>
        <h3>Directions</h3>
        <p>{data.recipe.directions}</p>
      </div>
    )}
  </Modal>
);

export default ViewModal;
