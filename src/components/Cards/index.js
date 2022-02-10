import { Link } from "react-router-dom";
import axios from "axios";

export function Cards(props) {
  async function handleDelete() {
    try {
      await axios.delete(
        `https://ironrest.herokuapp.com/catchapet/${props.id}`
      );
      props.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fs-3">{props.name}</h5>
          <p className="card-text">
            <span className="fw-bold">Specie: </span>
            {props.species}
          </p>
          <p className="card-text">
            <span className="fw-bold">Gender: </span>
            {props.gender}
          </p>
          <p className="card-text">
            <span className="fw-bold">Age: </span>
            {props.age}
          </p>
          <p className="card-text">
            <span className="fw-bold">Favorite Toy: </span>
            {props.favoriteToy}
          </p>
          <Link to={`/editar-pet/${props.id}`}>
            <button type="button">Editar Pet</button>
          </Link>
          <button type="button" onClick={handleDelete}>
            Remover Pet
          </button>
        </div>
      </div>
    </>
  );
}
