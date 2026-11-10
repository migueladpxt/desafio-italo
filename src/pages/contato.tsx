
function Contato() {
  return (
    <main className="contato">
      <h1>Entre em Contato</h1>

      <p>
        Tem alguma dúvida? Envie uma mensagem
        para nossa equipe!
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            required
          />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div>
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem"
            rows={5}
            required
          />
        </div>

        <button type="submit">
          Enviar Mensagem
        </button>
      </form>
    </main>
  );
}

export default Contato;
