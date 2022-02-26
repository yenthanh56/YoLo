import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateCart, removeCart } from "../redux/ShoppingCart/cartItem";
import numberWithCommas from "./../utils/numberWithCommas";

CartItem.propTypes = {
	item: PropTypes.object,
};

function CartItem(props) {
	const disPatch = useDispatch();

	// newitem contain all properties : quantity , size , color

	const [newitem, setNewitem] = useState(props.item);
	const [quantity, setQuantity] = useState(props.item.quantity);

	useEffect(() => {
		setNewitem(props.item);
		setQuantity(props.item.quantity);
	}, [props.item, props.item.quantity]);

	const updateQuantity = (opt) => {
		if (opt === "+") {
			disPatch(updateCart({ ...newitem, quantity: quantity + 1 }));
		}
		if (opt === "-") {
			disPatch(
				updateCart({
					...newitem,
					quantity: quantity - 1 === 0 ? 1 : quantity - 1,
				})
			);
		}
	};
	const removeCartItem = () => {
		disPatch(removeCart(newitem));
	};

	return (
		<div className="cart__item">
			<div className="cart__item__image">
				<img src={newitem.product.image01} alt="" />
			</div>
			<div className="cart__item__info">
				<div className="cart__item__info__name">
					<Link to={`/catalog/${newitem.slug}`}>
						{`${newitem.product.title} - ${newitem.color} -
						${newitem.size}`}
					</Link>
				</div>
				<div className="cart__item__info__price">
					{numberWithCommas(newitem.product.price)}
				</div>
				<div className="cart__item__info__quantity">
					<div
						className="product__info__item__quantity__btn"
						onClick={() => updateQuantity("-")}
					>
						<i className="bx bx-minus"></i>
					</div>
					<div className="product__info__item__quantity__input">
						{quantity}
					</div>
					<div
						className="product__info__item__quantity__btn"
						onClick={() => updateQuantity("+")}
					>
						<i className="bx bx-plus"></i>
					</div>
				</div>
				<div
					className="cart__item__info__trash"
					onClick={() => removeCartItem()}
				>
					<i className="bx bx-trash"></i>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
