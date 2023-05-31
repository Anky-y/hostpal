import Home from './Pages/Home';
import About from './Pages/About';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './Css/app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
