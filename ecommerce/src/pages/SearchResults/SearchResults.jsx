import { useLoaderData } from "react-router-dom";
import List from "../../components/List/List";
import { Breadcrumb } from "../../components/Breadcrumb";
import { searchItems } from "../../services/itemService";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";
  const results = await searchItems(searchTerm);

  return results;
}

const SearchResults = () => {
  const items = useLoaderData();

  return (
    <>
      <Breadcrumb items={null} />
      <List items={items} />
    </>
  );
};

export default SearchResults;
