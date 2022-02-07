import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";

import numberWithCommas from "./../utils/numberWithCommas";

ProductCard.propTypes = {
	img1: PropTypes.string.isRequired,
	img2: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

function ProductCard(props) {
	const { img1, img2, title, slug, price } = props;
	return (
		<div className="product-card">
			<Link to={`/catalog/${slug}`}>
				<div className="product-card__image">
					<img src={img1} alt="" />
					<img src={img2} alt="" />
				</div>
				<h3 className="product-card__title">{title}</h3>
				<div className="product-card__price">
					{numberWithCommas(price)}
					<span className="product-card__price__old">
						<del>{numberWithCommas(399000)}</del>
					</span>
				</div>
			</Link>
			<div className="product-card__btn">
				<Link to="/product-card">
					<Button size="sm" icon="bx bx-cart" animation={true}>
						Chọn mua
					</Button>
				</Link>
			</div>
		</div>
	);
}

export default ProductCard;
