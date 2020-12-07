import { Modal } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import Note from "../../components/Note";
import NoteModal from "../../components/NoteModal";
import api from "../../services/api";
import { LoginContext } from "../../Contexts/LoginContext";
import "./Home.css";

function Home() {
  const [viewNote, setViewNote] = useState();
  const [notes, setNotes] = useState();
  const { token } = useContext(LoginContext);

  useEffect(() => {
    if (token) {
      api
        .get("/note", {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;

          setNotes(data);
        });
    }
  }, [token]);

  function handleClick(note) {
    setViewNote(note);
  }

  function handleClose() {
    setViewNote();
  }

  function handleSave(note) {
    const newNotes = [...notes];

    let i = 0;
    for (i; i < notes.length; i++) if (notes[i].note_id === note.note_id) break;

    const fieldsToUpdate = { ...note };
    delete fieldsToUpdate.user_id;

    api.put(`/note/${note.note_id}`, fieldsToUpdate, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    newNotes[i] = note;
    setNotes(newNotes);
  }

  return (
    <>
      <div className="noteContainer">
        {notes?.map((note) => (
          <Note key={note.note_id} note={note} onClick={handleClick} />
        ))}
      </div>
      <Modal
        open={viewNote !== undefined}
        onClose={handleClose}
        className="modalStyle"
      >
        <NoteModal note={viewNote} onClose={handleClose} onSave={handleSave} />
      </Modal>
    </>
  );
}

export default Home;
