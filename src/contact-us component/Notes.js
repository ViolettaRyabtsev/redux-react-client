import React from "react";
import "../App.css";
import "./notes.css";
import Note from "./Note";
function Notes(props) {
  return (
    <div>
      {props.data.notes.map((item) => (
        <div className="comment">
          <Note
            refetch={props.refetch}
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
