import { gql, useMutation } from "@apollo/client";
import { GET_NOTES } from "./ContactUs";
import { useState } from "react";
import "./notes.css";

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
    setSubmitted(!submitted);
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

  const handleCancel = () => {
    setNote({
      name: "",
      text: "",
    });
  };

  return (
    <>
      <div className="comment-container">
        <form onSubmit={handleSubmit}>
          {submitted ? (
            <div className="tell-us">
              {" "}
              <h2> Submitted successfully </h2>
            </div>
          ) : (
            <div className="tell-us">
              {" "}
              <h2> Tell us what you think </h2>
            </div>
          )}
          <label></label>
          <input
            onChange={(e) => setNote({ ...note, name: e.target.value })}
            value={note.name}
            className="input-name"
            placeholder="name..."
          ></input>
          <label></label>
          {/* {submitted && !note.name ? <span>please enter username</span> : null} */}
          <input
            onChange={(e) => setNote({ ...note, text: e.target.value })}
            value={note.text}
            placeholder="leave a comment..."
          ></input>
          {/* {submitted && !note.text ? <span>please enter text</span> : null} */}
          {note.name !== "" && note.text !== "" ? (
            <div className="buttons-div">
              <button type="submit"> COMMENT</button>{" "}
              <button type="cancel" onClick={handleCancel}>
                CANCEL
              </button>
            </div>
          ) : null}
        </form>
        {/* <button onClick={handleSubmit}>Add note </button> */}
      </div>
    </>
  );
}

export default AddNoteToMysql;
