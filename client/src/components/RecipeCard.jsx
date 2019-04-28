'use es6';

import React from 'react';
import { Card, Col, Row, Empty, Spin, Button, Icon } from 'antd';

const RecipeCard = ({ loading, recipes, handleViewModal, handleEditModal }) => {
  if (loading) return <Spin />;
  return (
    <Row gutter={16}>
      {recipes && recipes.length === 0 && <Empty />}
      {recipes &&
        recipes.map(recipe => {
          const { id, ingredients, directions, title, published } = recipe;
          return (
            <Col span={6} key={id}>
              <Card
                key={id}
                style={{ background: '#fff' }}
                title={title}
                extra={
                  <React.Fragment>
                    <span>
                      <Icon
                        type="edit"
                        style={{ color: '#08c' }}
                        onClick={() =>
                          handleEditModal({
                            id,
                            directions,
                            ingredients,
                            title,
                            published
                          })
                        }
                      />
                    </span>
                  </React.Fragment>
                }
              >
                <h3>Ingredients</h3>
                {`${ingredients.substring(0, 200)}.....`}
                <h3>Directions</h3>
                {`${directions.substring(0, 200)}.....`}
                <Button
                  type="primary"
                  block
                  style={{ marginTop: '20px' }}
                  onClick={() => handleViewModal(id)}
                >
                  View Recipe
                </Button>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
};

export default RecipeCard;
