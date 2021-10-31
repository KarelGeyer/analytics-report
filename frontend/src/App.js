import './App.css';
import Layout from './components/layout/Layout';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className='App'>
          <Layout></Layout>
        </div>
      </Router>
    </ThemeProvider>
  )
};

export default App;
