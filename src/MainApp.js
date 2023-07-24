import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import MainPortfolio from './portfolio/mainportfolio.js';
import MainImmerfit from './immerfit/Home/Home.js';

function MainApp() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<MainPortfolio />} />
          <Route path="/immerfit" element={<MainImmerfit />} />
        </Routes>
      </Router>
    );
  }
  
  export default MainApp;
  