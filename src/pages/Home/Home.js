import React from "react";
import Note from "../../components/Note";
import "./Home.css";

const notes = [
  {
    id: 1,
    title: "Maguinho",
    description: "A matéria que mais da pau e divide corações Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
  },
  {
    id: 2,
    title: "Sistemas Digitais",
    description: "Programação com circuitos",
  },
  {
    id: 3,
    title: "PDS II",
    description: "Melhor matéria",
  },
  {
    id: 4,
    title: "FundMec",
    description: "Ninguém realmente gosta mas é a vida",
  },
  {
    id: 5,
    title: "Circuitos 1",
    description: "Prova de que elétrica é o melhor curso",
  },
  {
    id: 6,
    title: "Cálculo 2",
    description: "O pior dos cálculos",
  },
  {
    id: 7,
    title: "Fenotrans",
    description: "Poque eu tenho isso mesmo?",
  },
  {
    id: 8,
    title: "Bancos de Dados",
    description: "Optativa do Arthur",
  },
  {
    id: 9,
    title: "EDA",
    description:
      "Toda semana um novo teste e um pequeno momento de pânico nas quintas feiras",
  },
];

function Home() {
  return (
    <div className="noteContainer">
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
}

export default Home;
