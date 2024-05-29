import React from 'react';
import '../styles/ProductGrid.css'; 

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const ProductGrid = ({ products = [] }) => {
  const displayedProducts = products.slice(0, 8);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="grid">
          {displayedProducts.map((product) => {
            const primaryImageSrc = Array.isArray(product.images) && product.images[0] ? product.images[0] : null;

            return (
              <div key={product._id} className="product-card ">
                <div className="product-image-wrapper bg-gray-100">
                  {primaryImageSrc && (
                    <img
                      src={primaryImageSrc}
                      alt={product.description}
                      className="product-image"
                    />
                  )}
                </div>
                <div className="product-info">
                  <div>
                    <h3 className="product-name">
                      <a href="#">
                        {product.name}
                      </a>
                    </h3>
                    <p className="product-category">{product.category}</p>
                  </div>
                  <p className="product-price">₦{formatPrice(product.price.toFixed(2))}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
