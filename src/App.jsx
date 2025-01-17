
import React, { useState } from 'react';
import './App.css'; // Importando o App.css

const frases = [
  "Acredite em você e tudo será possível!",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Nunca desista dos seus sonhos!",
  "Cada dia é uma nova oportunidade para ser melhor.",
  "A persistência é o caminho do sucesso.",
  "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
  "O que você pode fazer hoje, não deixe para amanhã.",
  "O impossível é só uma opinião.",
  "Acredite em si mesmo e você será imparável.",
  "A vida começa onde sua zona de conforto termina."
];

function App() {
  // Estado para controlar a frase atual
  const [fraseAtual, setFraseAtual] = useState(frases[0]);

  // Função para trocar a frase
  const trocarFrase = () => {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    setFraseAtual(fraseAleatoria);
  };

  return (
    <div className="App">
      <h1>Frase Motivacional</h1>
      <p className="frase">{fraseAtual}</p>
      <button onClick={trocarFrase}>Mudar Frase</button>
    </div>
  );
}

export default App;