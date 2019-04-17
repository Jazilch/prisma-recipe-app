import React from 'react';
import 'antd/dist/antd.css';
import '../styles/App.css';
import '../styles/index.css';
import Sidebar from './Sidebar';
import RecipesContainer from '../containers/RecipesContainer';

const App = () => (
  <div className="App">
    <Sidebar>
      <RecipesContainer />
    </Sidebar>
  </div>
);

export default App;
