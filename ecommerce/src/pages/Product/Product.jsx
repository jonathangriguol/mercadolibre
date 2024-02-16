import { useLoaderData } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { Breadcrumb } from "../../components/Breadcrumb";
import { getItem } from "../../services/itemService";
import { Helmet } from "react-helmet";
import { META_COMPANY, META_DESCRIPTION, META_URL } from "../../constants/seo";

export async function loader({ params }) {
  const { id } = params;
  const item = await getItem(id);

  return item;
}

const Product = () => {
  const {item} = useLoaderData();
  const pageTitle = item.title[0].toUpperCase() + item.title.slice(1);
  const pageTitleCanonical = pageTitle.replace(/\s+/g, "-").toLowerCase();

  return (
    <>
      <Helmet>
        <title>{`${pageTitle} | ${META_COMPANY}`}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={`${META_URL}/${pageTitleCanonical}`} />
      </Helmet>
      <Breadcrumb items={null} />
      <ProductDetail product={item} />
    </>
  );
};

export default Product;
