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
									s
								/>
							</Link>
						))}
					</Gird>
				</SectionBody>
			</Section>

			{/* end policy */}
		</Helmet>
	);
}

export default memo(Home);
