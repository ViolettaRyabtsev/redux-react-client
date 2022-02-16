import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_NOTES } from "./App.js";
import "./notes.css";
function Note(props) {
  const DELETE_NOTE = gql`
    mutation deleteNote($name: String!, $text: String!, $id: ID!) {
      deleteNote(name: $name, text: $text, id: $id) {
        name
        text
        id
      }
    }
  `;

  const [click, setClick] = useState(false);

  const [delNote, { data, loading, error }] = useMutation(DELETE_NOTE, {
    refetchQueries: [GET_NOTES],
    onCompleted(data) {},
    onError(error) {},
    awaitRefetchQueries: true,
    suspense: false,
  });

  const deleteFormDtaBase = () => {
    props.refetch();
    delNote({
      variables: {
        name: props.name,
        text: props.text,
        id: props.id,
      },
    });

    let newNote = {
      name: props.name,
      text: props.text,
      id: props.id,
    };
    console.log(newNote, "new note");
  };

  return (
    <div className="note-section" onClick={() => setClick(true)}>
      <h4>{props.name}</h4>
      <p>{props.text}</p>
      {click ? <button onClick={deleteFormDtaBase}>delete</button> : null}
    </div>
  );
}

export default Note;
