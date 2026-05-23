import styles from './style.module.css';

import fotoHabito from '../../assets/poder.jpg';
import fotoMindset from '../../assets/mindset.jpg';
import fotoPersuasao from '../../assets/armas.jpg';

export default function CatalogoLivros() {
  const livros = [
    {
      id: 1,
      imagem: fotoHabito,
      titulo: "Book O Poder do Hábito",
      descricao: "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama.",
      quantidade: "10 unidades.",
      link: "https://google.com/search?q=comprar+o+poder+do+habito"
    },
    {
      id: 2,
      imagem: fotoMindset,
      titulo: "Book Mindset: A nova psicologia do sucesso",
      descricao: "Dweck revela de forma brilhante como o sucesso pode ser alcançado pela maneira como lidamos com nossos objetivos.",
      quantidade: "5 unidades.",
      link: "https://google.com/search?q=comprar+mindset+a+nova+psicologia+do+sucesso"
    },
    {
      id: 3,
      imagem: fotoPersuasao,
      titulo: "Book As armas da persuasão: Como influenciar e não se deixar influenciar",
      descricao: "Depois de passar anos caindo na lábia de vendedores, arrecadadores de doações e operadores de telemarketing, o psicólogo Robert B. Cialdini resolveu se dedicar ao estudo da persuasão.",
      quantidade: "unidades.",
      link: "https://google.com/search?q=comprar+as+armas+da+persuasao"
    }
  ];

  return (
    <div className={styles.container}>
      {livros.map((livro) => (
        <div key={livro.id} className={styles.secao}>
          <div className={styles.card}>
            <div className={styles.capaContainer}>
              <img src={livro.imagem} alt={livro.titulo} className={styles.capa} />
            </div>
            
            <div className={styles.conteudo}>
              <h2 className={styles.titulo}>{livro.titulo}</h2>
              <p className={styles.descricao}>{livro.descricao}</p>
              <p className={styles.quantidade}>
                Quantidade de exemplares: {livro.quantidade}
              </p>
              <a 
                href={livro.link} 
                target="_blank" 
                rel="noreferrer" 
                className={styles.botao}
              >
                Comprar agora
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
