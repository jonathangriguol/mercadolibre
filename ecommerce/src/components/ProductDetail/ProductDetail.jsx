import "./ProductDetail.scss";
import Button from "../Button/Button";

const ProductDetail = ({ product }) => {

  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img
          src={product.picture || null}
          alt={product.title || ""}
        />
      </div>

      <div className="product-detail__resume">
        <h1>
          {product.title && (
            <>{product.title}</>
          )}
        </h1>
        <span className="price">$ {product.price.amount} </span>
        <Button onClick={handleClick} modifier="primary">
          Comprar
        </Button>
      </div>

      <div className="product-detail__description">
        <h2>Descripción del producto</h2>
        {product.description && (
          <p>{product.description}</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
