import { useState } from "react";
import React from "react";
import "./App.css";
import Note from "./Note";
function Notes({ data }) {
  console.log(data.notes);

  return (
    <div>
      {data.notes.map((item) => (
        <div className="comment">
          <Note name={item.name} text={item.text} id={item.id} />
        </div>
      ))}
    </div>
  );
}
export default Notes;
