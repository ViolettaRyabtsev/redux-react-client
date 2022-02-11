import "./App.css";
import AddNote from "./AddNote";
import Notes from "./Notes";
import { useQuery, gql } from "@apollo/client";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

export const GET_NOTES = gql`
  query {
    notes {
      name
      text
      id
    }
  }
`;

function App() {
  const user = useSelector((state) => state.user.value);
  const list = useSelector((state) => state.cocktailList.value);

  const { loading, error, data, refetch } = useQuery(GET_NOTES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <NavBar />

      <AddNote refetch={() => refetch()} />
      <Notes refetchNotes={() => refetch()} data={data} />
      <div>{user.username} login </div>
      <div>
        {list.map((item) => (
          <h4>{item}</h4>
        ))}{" "}
        login{" "}
      </div>
    </>
  );
}

export default App;
