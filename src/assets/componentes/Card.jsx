
import Button from "./Button";

function Card({ titulo, imagem, descricao, preco }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} />

      <h2>{titulo}</h2>

      <p>{descricao}</p>

      <h3>R$ {preco}</h3>

      <Button
        texto="Comprar agora"
        onClick={() => alert(`${titulo} selecionado!`)}
      />
    </div>
  );
}

export default Card;
