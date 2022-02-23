import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// Cart.propTypes = {};

import Button from "../Components/Button";
import CartItem from "../Components/CartItem";
import Helmet from "../Components/Helmet";
import productData from "./../assets/fake-data/products";
import numberWithCommas from "./../utils/numberWithCommas";

function Cart() {
	const cartItem = useSelector((state) => state.CartItem.value);

	// console.log(productData.getCartItemsInfo(cartItem));

	const [cartProducts, setCartProducts] = useState([]);
	const [totalProducts, setTotalProducts] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		setCartProducts(productData.getCartItemsInfo(cartItem));
		setTotalProducts(
			cartItem.reduce((total, prod) => total + Number(prod.quantity), 0)
		);
		setTotalPrice(
			cartItem.reduce(
				(total, prod) =>
					total + Number(prod.quantity) * Number(prod.price),
				0
			)
		);
	}, [cartItem]);

	return (
		<Helmet title="Cart">
			<div className="cart">
				<div className="cart__info">
					<div className="cart__info__txt">
						<span>Bạn đang có {totalProducts} sản phẩm</span>
					</div>
					<div className="cart__info__price">
						<span>Tổng tiền bạn phải trả</span>
						<span>{numberWithCommas(totalPrice)}</span>
					</div>
					<div className="cart__info__btn">
						<Link to="/total">
							<Button size="block">Đặt hàng</Button>
						</Link>
						<Link to="/catalog">
							<Button size="block">Tiếp tục mua hàng</Button>
						</Link>
					</div>
				</div>
				<div className="cart__info__list">
					{cartProducts.map((item, index) => (
						<CartItem item={item} key={index} />
					))}
				</div>
			</div>
		</Helmet>
	);
}

export default Cart;
