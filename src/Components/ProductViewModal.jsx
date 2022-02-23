import React, { useState, useEffect } from "react";

import ProductView from "./ProductView";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import productData from "../assets/fake-data/products";
import { remove } from "../redux/product-modal/productModalSlice";

function ProductViewModal() {
	const productSlug = useSelector((state) => state.productModal.value);
	const disPatch = useDispatch();
	// const product = productData.getProductBySlug();
	const [product, setProduct] = useState(undefined);

	useEffect(() => {
		setProduct(productData.getProductBySlug(productSlug));
	}, [productSlug]);

	return (
		<div
			className={`product-view__modal ${
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
