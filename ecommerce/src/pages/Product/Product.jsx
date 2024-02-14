import { useLoaderData } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { Breadcrumb } from "../../components/Breadcrumb";

const product = {
  first: "Deco Reverse Sombrero Oxford",
  last: "Name",
  avatar: "https://placekitten.com/g/200/200",
  twitter: "your_handle",
  notes: "Some notes Some notes Some notes Some notes Some notes Some notes Some notes Some notes Some notes Some notes ",
  favorite: true,
};

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchParams = url.searchParams.get("search");
  //const product = await getProduct(searchParams);

  return { product };
}

const Product = () => {
  const { product } = useLoaderData();

  return (
    <>
      <Breadcrumb items={null} />
      <ProductDetail product={product} />
    </>
  );
};

export default Product;
