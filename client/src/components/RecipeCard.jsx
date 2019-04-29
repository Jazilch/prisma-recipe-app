'use es6';

import React from 'react';
import { Card, Col, Row, Empty, Spin, Button, Icon } from 'antd';
import CardIcons from './CardIcons';

Icon.setTwoToneColor('#CC4400');

const RecipeCard = ({
  loading,
  recipes,
  formState,
  handleViewModal,
  handleEditModal,
  handleDeletePopup
}) => {
  if (loading) return <Spin />;
  return (
    <Row gutter={16}>
      <React.Fragment>
        {recipes && recipes.length === 0 && <Empty />}
        {recipes &&
          recipes.map(recipe => {
            const { id, ingredients, directions, title } = recipe;
            return (
              <Col span={6} key={id}>
                <Card
                  key={id}
                  style={{ background: '#fff' }}
                  title={title}
                  extra={
                    <CardIcons
                      recipe={recipe}
                      formState={formState}
                      handleEditModal={handleEditModal}
                      handleDeletePopup={handleDeletePopup}
                    />
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
      </React.Fragment>
      {/* )}
      </Mutation> */}
    </Row>
  );
};

export default RecipeCard;
