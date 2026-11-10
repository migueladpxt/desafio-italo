
import { Routes, Route } from "react-router-dom";

import Header from "./assets/componentes/Header";
import Footer from "./assets/componentes/Footer";
import Menu from "./assets/componentes/Menu";

import Home from "./pages/home";
import Produtos from "./pages/produtos";
import Sobre from "./pages/sobre";
import Contato from "./pages/contato";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
