'use es6';

import React from 'react';
import { Card, Col, Row, Empty, Spin, Button } from 'antd';

const RecipeCard = ({ loading, recipes, handleModal }) => {
  if (loading) return <Spin />;
  return (
    <Row gutter={16}>
      {recipes && recipes.length === 0 && <Empty />}
      {recipes &&
        recipes.map(recipe => (
          <Col span={6} key={recipe.id}>
            <Card
              key={recipe.id}
              value={recipe.id}
              style={{ background: '#fff' }}
              title={recipe.title}
            >
              <p>{recipe.ingredients}</p>
              <p>{recipe.directions}</p>
              <Button type="primary" onClick={() => handleModal(recipe.id)}>
                View Recipe
              </Button>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default RecipeCard;
