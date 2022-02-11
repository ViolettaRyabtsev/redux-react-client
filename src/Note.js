import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_NOTES } from "./App.js";

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
    <div onClick={() => setClick(true)}>
      <h5>{props.name}</h5>
      <h6>{props.text}</h6>
      {click ? <button onClick={deleteFormDtaBase}>delete</button> : null}
    </div>
  );
}

export default Note;
