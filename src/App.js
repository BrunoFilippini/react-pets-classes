import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Pets } from "./pages/Pets";
import { Contact } from "./pages/Contact";
import { PostNewPets } from "./pages/PostNewPets";
import { EditPets } from "./pages/EditPets";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/pets/:species" element={<Pets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cadastro-pets" element={<PostNewPets />} />
        <Route path="editar-pet/:id" element={<EditPets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
