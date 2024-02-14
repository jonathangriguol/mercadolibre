import { useLoaderData } from "react-router-dom";
import List from "../../components/List/List";
import dummy from "./dummy.json";
import { Breadcrumb } from "../../components/Breadcrumb";

export async function loader({ request }) {
  console.log(request);
  const url = new URL(request.url);
  //const q = url.searchParams.get("q") || ""; // Handle error
  //const results = await getContact(params.contactId);
  return dummy;
}

const SearchResults = () => {
  const { items } = useLoaderData();

  return (
    <>
      <Breadcrumb items={null} />
      <List items={items} />
    </>
  );
};

export default SearchResults;
