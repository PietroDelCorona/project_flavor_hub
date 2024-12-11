
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecipesList.css';

function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/recipes')
      .then((response) => setRecipes(response.data.data))
      .catch((error) => console.error('Erro ao carregar receitas:', error));
  }, []);

  return (
    <div>
      <h2>Receitas</h2>
        {/* Exibindo em Cards */}
        <div className="cards-container">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p><strong>Ingredientes:</strong> {recipe.ingredients}</p>
              <p><strong>Instruções:</strong> {recipe.instructions}</p>
              <p><strong>Tempo de preparo:</strong> {recipe.prep_time} minutos</p>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default RecipesList;


