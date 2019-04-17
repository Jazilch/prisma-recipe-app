'use es6';

import React from 'react';
import { Card, Col, Row, Empty, Spin } from 'antd';

const RecipeCard = ({ loading, recipes }) => (
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
);

export default RecipeCard;
