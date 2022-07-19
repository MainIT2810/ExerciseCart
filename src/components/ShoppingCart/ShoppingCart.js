import React, { Component } from "react";
import ModalCart from "./ModalCart";
import ProductList from "./ProductList";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="text-right">
        <span
            style={{ width: 17, cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa fa-cart-arrow-down"></i> (0) Giỏ
            hàng
          </span>
        </div>
        <ModalCart/>
        <ProductList/>
      </div>
    );
  }
}
