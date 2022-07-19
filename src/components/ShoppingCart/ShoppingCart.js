import React, { Component } from "react";
import ModalCart from "./ModalCart";
import ProductList from "./ProductList";

export default class ShoppingCart extends Component {
  state = {
    cart: [],
  };

  addingToCart = (newCart) => {
    console.log(newCart);

    let cartItem = {
      maSP: newCart.maSP,
      tenSP: newCart.tenSP,
      hinhAnh: newCart.hinhAnh,
      donGia: newCart.donGia,
      soLuong: 1,
    };

    // Tìm xem sản phẩm có trong giỏ hàng chưa

    let index = this.state.cart.findIndex(
      (cartItems) => cartItems.maSP === cartItem.maSP
    );

    if (index !== -1) {
      // Tìm thấy sản phẩm trong giỏ hàng => tăng số lượng sản phẩm
      this.state.cart[index].soLuong += 1;
    } else {
      // Không tìm thấy sản phẩm trong giỏ hàng => thêm sảm phẩm vào trong giỏ hàng
      this.state.cart.push(cartItem);
    }

    let cartUpdate = [...this.state.cart];
    this.setState({
      cart: cartUpdate,
    });
  };

  deleteToCart = (maSP) => {
    let index = this.state.cart.findIndex(
      (cartItems) => cartItems.maSP === maSP
    );

    if (index !== -1) {
      this.state.cart.splice(index, 1);
    }
    this.setState({
      cart: this.state.cart,
    });
  };

  countCarts = () => {
    return this.state.cart.reduce((countCarts, cartItems, index) => {
      return (countCarts += cartItems.soLuong);
    }, 0);
  };

  upAndDownCart = (maSP, number) => {
    // 1 là tăng sản phẩm, -1 là giảm sản phẩm
    let cart = [...this.state.cart];
    let index = cart.findIndex((cartItems) => cartItems.maSP === maSP);

    if (index !== -1) {
      if (cart[index].soLuong <= 1 && number === -1) {
        alert("Số lượng tối thiểu phải là 1!");
        return 0;
      }
      cart[index].soLuong += number;
      this.setState({
        cart: cart,
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="text-right">
          <span
            style={{ width: 17, cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i className="fa fa-cart-arrow-down"></i> ({this.countCarts()}) Giỏ
            hàng
          </span>
        </div>
        <ModalCart
          cart={this.state.cart}
          deleteToCart={this.deleteToCart}
          upAndDownCart={this.upAndDownCart}
        />
        <ProductList addingToCart={this.addingToCart} />
      </div>
    );
  }
}
