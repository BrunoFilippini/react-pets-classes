import { Cards } from "../../components/Cards";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function Pets() {
  const params = useParams();
  const [pet, setPets] = useState([]);
  const [rerender, setRereder] = useState(true);

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
    setRereder(false);
  }, [rerender]);

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
              setRerender={setRereder}
              id={currentPet._id}
              species={currentPet.species}
              name={currentPet.name}
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
