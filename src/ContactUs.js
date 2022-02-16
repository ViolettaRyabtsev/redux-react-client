import AddNoteToMysql from "./AddNote";
import Notes from "./Notes";
import { useQuery, gql } from "@apollo/client";

export const GET_NOTES = gql`
  query {
    notes {
      name
      text
      id
    }
  }
`;

function ContactUs() {
  const { loading, error, data, refetch } = useQuery(GET_NOTES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <AddNoteToMysql refetch={() => refetch()} />
      <Notes data={data} refetch={() => refetch()} />
    </div>
  );
}

export default ContactUs;
