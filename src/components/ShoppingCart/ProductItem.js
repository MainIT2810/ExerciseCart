import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { productProps } = this.props;
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={productProps.hinhAnh}
          className="card-img-top"
          alt={productProps.tenSP}
          style={{ width: 280, height: 300 }}
        />
        <div className="card-body">
          <h5 className="card-title">{productProps.tenSP}</h5>
          <p className="card-text">{(productProps.donGia).toLocaleString()}</p>
          <button
          className="btn btn-primary"
          onClick = {()=>{this.props.addingToCart(productProps)}}
          >
            <i className="fa fa-cart-arrow-down"> Add to cart</i>
          </button>
        </div>
      </div>
    );
  }
}
