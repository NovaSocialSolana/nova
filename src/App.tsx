import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

const App: React.FC = () => {
  return (

      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>

  );
};

export default App;