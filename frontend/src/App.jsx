import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Categories from './Components/Categories'
import RecipesList from './Components/RecipesList'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/recipes' element={<RecipesList/>}/>
        </Routes>
      </div>
    </Router>    
  );
};

export default App;
