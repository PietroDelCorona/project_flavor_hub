import React, { useState } from "react";
import axios from "axios";
import './RecipeForm.css'

function RecipeForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    category: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      ingredients: formData.ingredients.split(",") // Converte a string de ingredientes em uma lista separada por vírgulas
    };
    axios
      .post("http://localhost:3001/recipes", dataToSend)
      .then((response) => {
        console.log("Receita cadastrada:", response.data);
        alert("Receita cadastrada com sucesso!");
        setFormData({
          name: "",
          description: "",
          ingredients: "",
          instructions: "",
          category: ""
        });
      })
      .catch((error) => {
        console.error("Erro ao cadastrar receita:", error);
        alert("Erro ao cadastrar receita.");
      });
  };

  return (
    <div>
      <h2>Cadastrar Receita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Ingredientes (separados por vírgula):</label>
          <input
            type="text"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Modo de Preparo:</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Categoria:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default RecipeForm;
