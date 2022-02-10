import React from "react";
import Gird from "./Gird";
import ProductCard from "./ProductCard";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";

InfinityList.propTypes = {
	data: PropTypes.array.isRequired,
};

function InfinityList(props) {
	const [data, setData] = useState(props.data);

	useEffect(() => {
		setData(props.data);
	}, [props.data]);

	return (
		<div>
			<Gird col={3} mdCol={2} smCol={1} gap={20}>
				{data.map((item, index) => (
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
		</div>
	);
}

export default InfinityList;
