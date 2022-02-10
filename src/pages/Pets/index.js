import axios from "axios";
import { Cards } from "../../components/Cards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function Pets() {
  const params = useParams();
  const [pet, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      try {
        const result = await axios.get(
          "https://ironrest.herokuapp.com/catchapet"
        );
        setPets([...result.data]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPets();
  }, []);

  return (
    <>
      {pet
        .filter((currentPet) => {
          return currentPet.species?.toLowerCase() === params.species;
        })
        .map((currentPet) => {
          return (
            <Cards
              key={currentPet._id}
              id={currentPet._id}
              name={currentPet.name}
              species={currentPet.species}
              gender={currentPet.gender}
              age={currentPet.age}
              favoriteToy={currentPet.favoriteToy}
              img={currentPet.img}
            />
          );
        })}
    </>
  );
}
