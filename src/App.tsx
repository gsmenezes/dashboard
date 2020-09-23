import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './Components/Layout';
import Dashboard from './Pages/Dashboard';
import GlobalStyles from './Styles/GlobalStyles';
import blue from './Styles/Themes/blue';
import light from './Styles/Themes/light';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={blue}>
            <GlobalStyles />
            <Layout />
        </ThemeProvider>
    );
}

export default App;