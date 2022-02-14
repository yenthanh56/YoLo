import React, { useState, useEffect } from "react";
import { remove } from "../redux/product-modal/productModalSlice.js";
import { useDispatch, useSelector } from "react-redux";

import ProductView from "./ProductView";
import Button from "./Button";

import productData from "../assets/fake-data/products";

function ProductViewModal() {
	const productSlug = useSelector((state) => state.productModal.value);
	const disPatch = useDispatch();

	const [product, setProduct] = useState(undefined);

	// const product = productData.getProductBySlug("ao-thun-dinosaur-02");
	useEffect(() => {
		setProduct(productData.getProductBySlug(productSlug));
	}, [productSlug]);

	return (
		<div
			className={` product-view__modal ${
				product === undefined ? "" : "active"
			}`}
		>
			<div className="product-view__modal__content">
				<ProductView product={product} />
				<div className="product-view__modal__btn">
					<Button size="sm" onclick={() => disPatch(remove())}>
						Đóng
					</Button>
				</div>
			</div>
		</div>
	);
}

export default ProductViewModal;
