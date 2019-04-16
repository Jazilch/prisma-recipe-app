'use es6';

import React from 'react';
import { Query } from 'react-apollo';

import { Card, Col, Row, Empty, Spin } from 'antd';

import GetAllRecipes from '../graphql/queries/GetAllRecipes';

const RecipesContainer = () => {
  return (
    <div>
      <Query query={GetAllRecipes}>
        {({ loading, data: { recipes } }) => (
          <Row gutter={16}>
            {!recipes && <Empty />}
            {loading && <Spin />}
            {recipes &&
              recipes.map(recipe => (
                <Col span={6} key={recipe.id}>
                  <Card style={{ background: '#fff' }} title={recipe.title}>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.directions}</p>
                  </Card>
                </Col>
              ))}
          </Row>
        )}
      </Query>
    </div>
  );
};

export default RecipesContainer;
