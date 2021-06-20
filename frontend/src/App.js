import './App.css';
import Layout from "./layout/Layout"
import { ThemeProvider } from 'styled-components';
import theme from "./theme/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Layout></Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
