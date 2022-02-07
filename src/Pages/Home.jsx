import React, { memo } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Home.propTypes = {};
import Helmet from "../Components/Helmet";
import HeroSlider from "../Components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";
import Section, { SectionTitle, SectionBody } from "../Components/Section";
import policy from "../assets/fake-data/policy";
import PolicyCard from "../Components/PolicyCard";
import Gird from "./../Components/Gird";

import productData from "../assets/fake-data/products.js";
import ProductCard from "../Components/ProductCard";
function Home() {
	return (
		<Helmet title="Trang chủ">
			<HeroSlider
				data={heroSliderData}
				control={true}
				auto={false}
				timeOut={5000}
			/>

			{/* policy */}
			<Section>
				<SectionBody>
					<Gird col={4} mdCol={2} smCol={1} gap={20}>
						{policy.map((item, index) => (
							<Link key={index} to="/policy">
								<PolicyCard
									name={item.name}
									description={item.description}
									icon={item.icon}
								/>
							</Link>
						))}
					</Gird>
				</SectionBody>
			</Section>

			{/* end policy */}
			{/* selling top */}
			<Section>
				<SectionTitle>Top Những Sản Phẩm Bán Chạy Nhất</SectionTitle>
				<SectionBody>
					<Gird col={4} mdCol={2} smCol={1} gap={20}>
						{productData.getProducts(4).map((item, index) => (
							<ProductCard
								key={index}
								img1={item.image01}
								img2={item.image02}
								title={item.title}
								slug={item.slug}
								price={Number(item.price)}
							/>
						))}
					</Gird>
				</SectionBody>
			</Section>

			{/* end selling top */}

			{/* best selling */}
			<Section>
				<SectionTitle>Phổ Biến</SectionTitle>
				<SectionBody>
					<Gird col={4} mdCol={2} smCol={1} gap={20}>
						{productData.getProducts(12).map((item, index) => (
							<ProductCard
								key={index}
								img1={item.image01}
								img2={item.image02}
								title={item.title}
								slug={item.slug}
								price={Number(item.price)}
							/>
						))}
					</Gird>
				</SectionBody>
			</Section>
			{/* end best selling */}
		</Helmet>
	);
}

export default memo(Home);
