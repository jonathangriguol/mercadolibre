import { useLoaderData } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { Breadcrumb } from "../../components/Breadcrumb";
import { getItem } from "../../services/itemService";

export async function loader({ params }) {
  const { id } = params;
  const item = await getItem(id);

  return item;
}

const Product = () => {
  const item = useLoaderData();

  return (
    <>
      <Breadcrumb items={null} />
      <ProductDetail product={item} />
    </>
  );
};

export default Product;
