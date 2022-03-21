import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_NOTES } from "../App";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
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
      <div style={{ display: "flex", "background-color": "red" }}>
        <h4 style={{ "margin-left": "20px" }}>{props.name}</h4>
        <h4 style={{ "margin-left": "40px" }}>time</h4>
      </div>
      <p
        style={{
          "margin-left": "20px",
          "background-color": "red",
          "margin-top": "5px",
        }}
      >
        {props.text}
      </p>
      <div
        style={{
          display: "flex",
          "background-color": "red",
        }}
      >
        <div style={{ "margin-left": "40px" }}>
          <AiOutlineLike style={{ color: "white", "margin-top": "20px" }} />{" "}
          <AiOutlineDislike style={{ color: "white" }} />
        </div>
        <h5 style={{ "margin-left": "40px" }}>reply</h5>
      </div>
      {click ? <button onClick={deleteFormDtaBase}>delete</button> : null}
    </div>
  );
}

export default Note;
