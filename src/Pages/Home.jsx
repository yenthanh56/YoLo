import React, { memo } from "react";
// import PropTypes from "prop-types";

// Home.propTypes = {};
import Helmet from "../Components/Helmet";
import HeroSlider from "../Components/HeroSlider";
import heroSliderData from "../assets/fake-data/hero-slider";

function Home() {
	return (
		<Helmet title="Trang chủ">
			<HeroSlider
				data={heroSliderData}
				control={true}
				auto={false}
				timeOut={5000}
			/>
		</Helmet>
	);
}

export default memo(Home);
