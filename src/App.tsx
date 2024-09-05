import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './global.css';

// Import Preline
import 'preline/preline';

// Define the HSStaticMethods interface (similar to the tutorial)
declare global {
  interface Window {
    HSStaticMethods: {
      autoInit: () => void;
    };
  }
}

function App() {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods?.autoInit();
  }, [location.pathname]);

  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/deployments" element={<Home />} />
          <Route path="/activity" element={<Home />} />
          <Route path="/domains" element={<Home />} />
          <Route path="/usage" element={<Home />} />
          <Route path="/settings" element={<Home />} />
        </Routes>
      </Layout>

  );
}

export default App;
