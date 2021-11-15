import React from 'react';
import './App.css';
import Layout from './Layout';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './theme/theme';
import Header from './components/header/Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Header />
          <Layout></Layout>
        </div>
      </Router>
    </ThemeProvider>
  )
};

export default App;
