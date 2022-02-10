import { Link } from "react-router-dom";

export function Contact() {
  return (
    <div class="card" style={{ width: "18rem" }}>
      <div class="card-body">
        <h5 class="card-title">Fale Conosco</h5>
        <h6 class="card-subtitle mb-2 text-muted">Adote um bixinho</h6>
        <p class="card-text">Somos uma ong de adoção de pets.</p>
        <p>
          <a
            target="_blank"
            href={`https://api.whatsapp.com/send?phone=+55999999999&text=Quero adotar um pet!`}
            rel="noreferrer noopener"
          >
            Nosso WhatsApp
          </a>
        </p>
        <p>
          <Link to="/pets/dog" href="#" class="card-link">
            Cães para adoção
          </Link>
        </p>
        <p>
          <Link to="/pets/cat" href="#" class="card-link">
            Gatos para adoção
          </Link>
        </p>
      </div>
    </div>
  );
}
