'use es6';

import React from 'react';
import { Query } from 'react-apollo';
import ViewModal from '../components/ViewModal';
import EditModal from '../components/EditModal';
import GetRecipe from '../graphql/queries/GetRecipe';

const ModalsContainer = ({
  activeId,
  viewModalOpen,
  toggleViewModal,
  formState,
  handleChange,
  editModalOpen,
  toggleEditModal
}) => (
  <Query query={GetRecipe} variables={{ recipeId: `${activeId}` }}>
    {({ data, loading }) => (
      <React.Fragment>
        <ViewModal
          data={data}
          loading={loading}
          viewModalOpen={viewModalOpen}
          toggleViewModal={toggleViewModal}
        />
        <EditModal
          data={data}
          loading={loading}
          formState={formState}
          handleChange={handleChange}
          editModalOpen={editModalOpen}
          toggleEditModal={toggleEditModal}
        />
      </React.Fragment>
    )}
  </Query>
);

export default ModalsContainer;
