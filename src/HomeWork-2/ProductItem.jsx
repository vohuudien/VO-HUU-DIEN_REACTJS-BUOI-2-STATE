import React from "react";

const ProductItem = ({ product }) => {
  if (!product) {
    return null;
  }
  return (
    <div className="row mt-5">
      <div className="col-sm-6">
        <img
          src={product.image}
          alt={product.name}
          width="100%"
          height="500px"
        />
      </div>
      <div className="col-sm-6">
        <h1>Chi Tiết Sản Phẩm</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Loại sản phẩm</td>
              <td>{product.alilas}</td>
            </tr>
            <tr>
              <td>Gía</td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>Mô tả nữa</td>
              <td>{product.shortDescription}</td>
            </tr>
            <tr>
              <td>Số lượng</td>
              <td>{product.quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductItem;
