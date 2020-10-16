import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import Note from "../../components/Note";
import NoteModal from "../../components/NoteModal";
import "./Home.css";

const _notes = [
  {
    id: 1,
    title: "Maguinho",
    description:
      "A matéria que mais da pau e divide corações Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
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
  const [viewNote, setViewNote] = useState();
  const [notes, setNotes] = useState(_notes);

  function handleClick(note) {
    setViewNote(note);
  }

  function handleClose() {
    setViewNote();
  }

  function handleSave(note) {
    const newNotes = [...notes];

    let i = 0;
    for (i; i < notes.length; i++) 
      if(notes[i].id === note.id)
        break;
    
    newNotes[i] = note;
    setNotes(newNotes);
  }

  return (
    <>
      <div className="noteContainer">
        {notes.map((note) => (
          <Note key={note.id} note={note} onClick={handleClick} />
        ))}
      </div>
      <Modal open={viewNote} onClose={handleClose} className="modalStyle">
        <NoteModal note={viewNote} onClose={handleClose} onSave={handleSave} />
      </Modal>
    </>
  );
}

export default Home;
