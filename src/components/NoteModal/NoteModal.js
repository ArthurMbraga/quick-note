import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./NoteModal.css";

function NoteModal({ note, onSave, onClose }) {
  const [tempNote, setTempNote] = useState({ ...note });

  function changeTempNote(e, field) {
    tempNote[field] = e.target.value;

    setTempNote({ ...tempNote });
  }

  function saveNote() {
    onSave({ ...tempNote });
    onClose();
  }

  return (
    <div className="noteModal">
      <input
        className="noteModalTitle"
        type="text"
        onChange={(e) => changeTempNote(e, "title")}
        value={tempNote.title}
      />
      <textarea
        className="noteModalDescription"
        onChange={(e) => changeTempNote(e, "description")}
        value={tempNote.description}
      />
      <div className="buttonsRow">
        <Button onClick={onClose}>Cancelar</Button>
        <Button variant="contained" color="primary" onClick={saveNote}>
          Salvar
        </Button>
      </div>
    </div>
  );
}

export default NoteModal;
