import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export function PostNewPets() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    species: "",
    gender: "",
    age: null,
    favoriteToy: "",
    img: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`Gentileza preencher o campo ${key} corretamente`);
        return;
      }
    }

    try {
      await axios.post("https://ironrest.herokuapp.com/catchapet", form);
      navigate(`/pets/${form.species.toLowerCase()}`);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="petName">Nome do pet:</label>
      <input
        id="petName"
        placeholder="Rex"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <p>Especie:</p>
      <label htmlFor="dog">Cão</label>
      <input
        id="dog"
        name="species"
        value="Dog"
        type="radio"
        onChange={handleChange}
      />
      <label htmlFor="cat">Gato</label>
      <input
        id="cat"
        name="species"
        value="Cat"
        type="radio"
        onChange={handleChange}
      />
      <p>Genero:</p>
      <label htmlFor="male">Male</label>
      <input
        id="male"
        name="gender"
        value="Male"
        type="radio"
        onChange={handleChange}
      />
      <label htmlFor="female">Female</label>
      <input
        id="female"
        name="gender"
        value="Female"
        type="radio"
        onChange={handleChange}
      />
      <label htmlFor="age">Idade:</label>
      <input
        id="age"
        type="number"
        name="age"
        onChange={handleChange}
        value={form.age}
      />
      <label htmlFor="favoriteToy">Brinquedo Favorito:</label>
      <input
        id="favoriteToy"
        name="favoriteToy"
        value={form.favoriteToy}
        onChange={handleChange}
      />
      <label htmlFor="img">Link da foto:</label>
      <input id="img" name="img" value={form.img} onChange={handleChange} />
      <button type="submit">Cadastrar pet!</button>
    </form>
  );
}

// CRUD - CREATE, READ, UPDATE and DELETE
// 1 CRUD COMPLETO

// window.alert(`Preencha os campos ${key} corretamente`);
// console.log("Caiu no if");
