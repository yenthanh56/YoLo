import React, { useEffect } from "react";
// import PropTypes from "prop-types";
// Product.propTypes = {};
import Helmet from "../Components/Helmet";
import Section, { SectionTitle, SectionBody } from "../Components/Section";
import Gird from "../Components/Gird";
import ProductCard from "./../Components/ProductCard";

import productData from "./../assets/fake-data/products";
import ProductView from "../Components/ProductView";

import { useParams } from "react-router-dom";

function Product(props) {
	const params = useParams();
	const product = productData.getProductBySlug(params.slug);

	const relatedProducts = productData.getProducts(8);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	return (
		<Helmet title={product.title}>
			<Section>
				<ProductView product={product} />
			</Section>

			{/* add discover */}
			<Section>
				<SectionTitle>Khám phá thêm</SectionTitle>
				<SectionBody>
					<Gird col={4} mdCol={2} smCol={1} gap={20}>
						{relatedProducts.map((item, index) => (
							<ProductCard
								key={index}
								img1={item.image01}
								img2={item.image02}
								title={item.title}
								price={Number(item.price)}
								slug={item.slug}
							/>
						))}
					</Gird>
				</SectionBody>
			</Section>
			{/* end add discover */}
		</Helmet>
	);
}

export default Product;
