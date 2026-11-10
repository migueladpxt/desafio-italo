
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <h1>Bem-vindo à TechStore!</h1>

      <p>
        Sua loja de tecnologia com os melhores
        produtos para o seu dia a dia.
      </p>

      <h2>Conheça nossos produtos!</h2>

      <p>
        Trabalhamos com smartphones, notebooks,
        consoles e acessórios para gamers.
      </p>

      <Link to="/produtos">
        Ver Produtos
      </Link>
    </main>
  );
}

export default Home;
