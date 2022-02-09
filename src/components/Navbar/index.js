import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CatchAPet
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " to="/pets/dog">
                  Cães
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pets/cat">
                  Gatos
                </Link>
              </li>
              <li className="nav-item">
                {/*      <Link className="nav-link" href="#">
                  Fale Conosco
                </Link> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
