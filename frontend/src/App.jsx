import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Categories from './Components/Categories'
import RecipesList from './Components/RecipesList';
import RecipeForm from './Components/RecipeForm'; 

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/categories' element={<Categories/>}/>
          <Route path='/recipes' element={<RecipesList/>}/>
          <Route path='/recipeform' element={<RecipeForm/>}/>
        </Routes>
      </div>
    </Router>    
  );
};

export default App;
