export function Cards(props) {
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
        </div>
      </div>
    </>
  );
}
