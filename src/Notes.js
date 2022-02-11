import { useState } from "react";
import React from "react";
import "./App.css";
import Note from "./Note";
function Notes(props) {
  return (
    <div>
      {props.data.notes.map((item) => (
        <div className="comment">
          <Note
            refetch={props.refetchNotes}
            name={item.name}
            text={item.text}
            id={item.id}
          />
        </div>
      ))}
    </div>
  );
}
export default Notes;
