import { gql, useMutation } from "@apollo/client";
import { GET_NOTES } from "./App";
import { useState } from "react";

const ADD_NOTE = gql`
  mutation addNote($name: String!, $text: String!, $id: ID!) {
    addNote(name: $name, text: $text, id: $id) {
      name
      text
      id
    }
  }
`;

function AddNoteToMysql(props) {
  const [note, setNote] = useState({
    name: "",
    text: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [addNote, { data, loading, error }] = useMutation(ADD_NOTE, {
    refetchQueries: [GET_NOTES],
    onCompleted(data) {},
    onError(error) {},
    awaitRefetchQueries: true,
    suspense: false,
  });

  const handleSubmit = (event) => {
    props.refetch();

    event.preventDefault();
    console.log("note is ", note);
    setSubmitted(true);
    //add to mysql
    addNote({
      variables: {
        name: note.name,
        text: note.text,
        id: Math.floor(Math.random() * 100),
      },
    });

    setNote({
      name: "",
      text: "",
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          {submitted ? <div>submitted successful</div> : null}
          <label>name </label>
          <input
            onChange={(e) => setNote({ ...note, name: e.target.value })}
            value={note.name}
          ></input>
          <label> comment </label>
          {/* {submitted && !note.name ? <span>please enter username</span> : null} */}
          <input
            onChange={(e) => setNote({ ...note, text: e.target.value })}
            value={note.text}
          ></input>
          {/* {submitted && !note.text ? <span>please enter text</span> : null} */}
          <button type="submit">Add note </button>
        </form>
        {/* <button onClick={handleSubmit}>Add note </button> */}
      </div>
    </>
  );
}

export default AddNoteToMysql;
