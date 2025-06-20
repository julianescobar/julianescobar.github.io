import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Portfolio from '@/pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio hiddenSocial={true} hiddenContact={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
