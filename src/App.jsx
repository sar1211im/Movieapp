
import { Route, Routes } from "react-router-dom";

import './css/App.css';
import Home from './pages/Home';
import Favourites from './pages/favourites';

function App() {
 
  return (
    <div>
    
  <main className="main-content">
  
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/favourites" element={<Favourites/>}/>
    </Routes>
  </main>
  </div>
  );
}

export default App;
