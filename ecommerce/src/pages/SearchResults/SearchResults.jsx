import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import List from "../../components/List/List";
import { Breadcrumb } from "../../components/Breadcrumb";
import { searchItems } from "../../services/itemService";
import { META_COMPANY, META_DESCRIPTION, META_URL } from "../../constants/seo";

let searchCache = {};

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "";

  if (searchCache[searchTerm]) {
    return { results: searchCache[searchTerm], searchTerm };
  } else {
    const results = await searchItems(searchTerm);
    searchCache[searchTerm] = results;
    return { results, searchTerm };
  }
}

const SearchResults = () => {
  const { results, searchTerm } = useLoaderData();
  const pageTitle = searchTerm[0]?.toUpperCase() + searchTerm.slice(1);
  const pageTitleCanonical = pageTitle.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <Helmet>
        <title>{`${pageTitle} | ${META_COMPANY}`}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={`${META_URL}/${pageTitleCanonical}`} />
      </Helmet>
      <Breadcrumb items={null} />
      <List items={results} />
    </>
  );
};

export default SearchResults;
