'use es6';

import React from 'react';
import { Query } from 'react-apollo';
import ViewModal from '../components/ViewModal';
import EditModal from '../components/EditModal';
import AddModal from '../components/AddModal';
import GetRecipe from '../graphql/queries/GetRecipe';

const ModalsContainer = ({
  activeId,
  formState,
  handleInputChange,
  handleChecked,
  viewModalOpen,
  editModalOpen,
  addModalOpen,
  setViewModalOpen,
  setEditModalOpen,
  setAddModalOpen
}) => (
  <Query query={GetRecipe} variables={{ recipeId: `${activeId}` }}>
    {({ data, loading }) => (
      <React.Fragment>
        <ViewModal
          data={data}
          loading={loading}
          viewModalOpen={viewModalOpen}
          setViewModalOpen={setViewModalOpen}
        />
        <EditModal
          data={data}
          loading={loading}
          formState={formState}
          handleInputChange={handleInputChange}
          handleChecked={handleChecked}
          editModalOpen={editModalOpen}
          setEditModalOpen={setEditModalOpen}
        />
        <AddModal
          loading={loading}
          formState={formState}
          handleInputChange={handleInputChange}
          handleChecked={handleChecked}
          addModalOpen={addModalOpen}
          setAddModalOpen={setAddModalOpen}
        />
      </React.Fragment>
    )}
  </Query>
);

export default ModalsContainer;
