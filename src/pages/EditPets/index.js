import { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function EditPets() {
  const params = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    species: "",
    gender: "",
    age: null,
    favoriteToy: "",
    img: "",
  });

  useEffect(() => {
    async function fetchPet() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/catchapet/${params.id}`
        );
        console.log(response);
        setForm({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    }

    fetchPet();
  }, [params.id]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  function handleSubmit(event) {
    event.preventDefault();

    for (let key in form) {
      if (!form[key]) {
        window.alert(`Gentileza preencher o campo ${key} corretamente`);
        return;
      }
    }

    delete form._id;
    axios
      .put(`https://ironrest.herokuapp.com/catchapet/${params.id}`, form)
      .then((result) => navigate(`/pets/${form.species.toLowerCase()}`))
      .catch((error) => {
        console.error(error);
      });
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
        checked={form.species === "Dog" ? true : false}
        type="radio"
        onChange={handleChange}
      />
      <label htmlFor="cat">Gato</label>
      <input
        id="cat"
        name="species"
        value="Cat"
        checked={form.species === "Cat" ? true : false}
        type="radio"
        onChange={handleChange}
      />

      <p>Genero:</p>
      <label htmlFor="male">Male</label>
      <input
        id="male"
        name="gender"
        value="Male"
        checked={form.gender === "Male" ? true : false}
        type="radio"
        onChange={handleChange}
      />
      <label htmlFor="female">Female</label>
      <input
        id="female"
        name="gender"
        value="Female"
        checked={form.gender === "Female" ? true : false}
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
