
import Card from "../assets/componentes/Card";

function Produtos() {
  const produtos = [
    {
      id: 1,
      titulo: "iPhone 15",
      imagem: "https://placehold.co/300x200?text=iPhone+15",
      descricao: "Smartphone Apple com 128GB.",
      preco: "3.999,00"
    },
    {
      id: 2,
      titulo: "Notebook Dell",
      imagem: "https://placehold.co/300x200?text=Notebook+Dell",
      descricao: "Notebook ideal para estudos e trabalho.",
      preco: "3.499,00"
    },
    {
      id: 3,
      titulo: "PlayStation 5",
      imagem: "https://placehold.co/300x200?text=PlayStation+5",
      descricao: "Console de última geração.",
      preco: "3.799,00"
    },
    {
      id: 4,
      titulo: "Mouse Gamer",
      imagem: "https://placehold.co/300x200?text=Mouse+Gamer",
      descricao: "Mouse com alta precisão.",
      preco: "149,90"
    },
    {
      id: 5,
      titulo: "Teclado Mecânico",
      imagem: "https://placehold.co/300x200?text=Teclado",
      descricao: "Teclado RGB para gamers.",
      preco: "299,90"
    },
    {
      id: 6,
      titulo: "Headset Gamer",
      imagem: "https://placehold.co/300x200?text=Headset",
      descricao: "Headset com som de alta qualidade.",
      preco: "199,90"
    }
  ];

  return (
    <main>
      <h1>Produtos da TechStore</h1>

      <div className="lista-produtos">
        {produtos.map((produto) => (
          <Card
            key={produto.id}
            titulo={produto.titulo}
            imagem={produto.imagem}
            descricao={produto.descricao}
            preco={produto.preco}
          />
        ))}
      </div>
    </main>
  );
}

export default Produtos;
