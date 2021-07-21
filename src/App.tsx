import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './pages/home';
import { MobileFooter } from './components';
import './App.css';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <Home />
    <MobileFooter />
  </>
);

export default App;
