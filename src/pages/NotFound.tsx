
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <h1>Erro 404</h1>

      <h2>Página não encontrada!</h2>

      <p>
        Desculpe, a página que você está
        procurando não existe.
      </p>

      <Link to="/">
        Voltar para o início
      </Link>
    </main>
  );
}

export default NotFound;
