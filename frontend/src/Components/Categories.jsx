import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";  

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categories")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar categorias:", error);
      });
  }, []);

  return (
    <div className="categories-container">
      <h2>Categorias de Receitas</h2>
      {categories.length === 0 ? (
        <p>Carregando categorias...</p>
      ) : (
        <div className="categories-cards">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <h3>{category.name}</h3>
              <p>
                Criado por: {category.createdBy.firstname} {category.createdBy.lastname}
              </p>
              {category.recipes && category.recipes.length > 0 ? (
                <ul className="recipe-list">
                  {category.recipes.map((recipe) => (
                    <li key={recipe.id} className="recipe-item">
                      <strong>{recipe.title}</strong>: {recipe.ingredients.split("\n")[0]}...
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Sem receitas nesta categoria.</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories;
