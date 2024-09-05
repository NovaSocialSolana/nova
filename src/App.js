import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import './global.css';
import Deployments from './components/Deployments';

// import Projects from './components/Projects';
// import Activity from './components/Activity';
// import Domains from './components/Domains';
// import Usage from './components/Usage';
// import Settings from './components/Settings';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;