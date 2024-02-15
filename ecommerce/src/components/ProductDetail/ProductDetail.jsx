import "./ProductDetail.scss";
import Button from "../Button/Button";

const ProductDetail = ({ product }) => {
  console.log(product);
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img
          key={product.dataFromService1.thumbnail}
          src={product.dataFromService1.thumbnail || null}
          alt={product.dataFromService1.title || ""}
        />
      </div>

      <div className="product-detail__resume">
        <h1>
          {product.dataFromService1.title && (
            <>{product.dataFromService1.title}</>
          )}
        </h1>
        <span className="price">$ {product.dataFromService1.price} </span>
        <Button onClick={handleClick} modifier="primary">
          Comprar
        </Button>
      </div>

      <div className="product-detail__description">
        <h2>Descripción del producto</h2>
        {product.dataFromService2plain_text && (
          <p>{product.dataFromService2.plain_text}</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
