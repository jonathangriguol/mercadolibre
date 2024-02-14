import "./ProductDetail.scss";
import Button from "../Button/Button";

const ProductDetail = ({ product }) => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img key={product.avatar} src={product.avatar || null} />
      </div>

      <div className="product-detail__resume">
        <h1>
          {product.first || product.last ? (
            <>
              {product.first} {product.last}
            </>
          ) : (
            <i>No Name</i>
          )}
        </h1>
        <span className="price">$ {product.price ?? "1.900"} </span>
        <Button onClick={handleClick} modifier="primary">
          Comprar
        </Button>
      </div>

      <div className="product-detail__description">
        <h2>Descripción del producto</h2>
        {product.notes && <p>{product.notes}</p>}
      </div>
    </div>
  );
};

export default ProductDetail;
