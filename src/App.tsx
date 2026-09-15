import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Projetos } from "./pages/Projetos";
import { Experiencia } from "./pages/Experiencia";
import { Contato } from "./pages/Contato";
import { NaoEncontrado } from "./pages/NaoEncontrado";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NaoEncontrado />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
