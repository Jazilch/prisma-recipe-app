import React from 'react';
import 'antd/dist/antd.css';
import '../styles/App.css';
import '../styles/index.css';
import RecipesContainer from '../containers/RecipesContainer';

const App = () => (
  <div className="App">
    <RecipesContainer />
  </div>
);

export default App;
