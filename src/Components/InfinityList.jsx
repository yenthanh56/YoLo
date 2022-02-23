import React from "react";
import Gird from "./Gird";
import ProductCard from "./ProductCard";

import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

InfinityList.propTypes = {
	data: PropTypes.array.isRequired,
};

function InfinityList(props) {
	const listRef = useRef(null);
	const perLoad = 6;

	const [data, setData] = useState([]);
	const [load, setLoad] = useState(false);

	const [index, setIndex] = useState(0);

	useEffect(() => {
		setData(props.data.slice(0, perLoad));
		setIndex(1);
	}, [props.data]);

	useEffect(() => {
		const handleScrollLoadItems = () => {
			if (listRef && listRef.current) {
				if (
					window.scrollY + window.innerHeight >=
					listRef.current.clientHeight + listRef.current.offsetTop
				) {
					setLoad(true);
				}
			}
		};
		window.addEventListener("scroll", handleScrollLoadItems);
		return () => {
			window.removeEventListener("scroll", handleScrollLoadItems);
		};
	}, [listRef]);

	useEffect(() => {
		const getItems = () => {
			const page = Math.floor(props.data.length / perLoad);
			const maxIndex =
				props.data.length % perLoad === 0 ? page : page + 1;

			if (load && index <= maxIndex) {
				const start = perLoad * index;
				const end = start + perLoad;

				setData(data.concat(props.data.slice(start, end)));
				setIndex(index + 1);
			}
		};
		getItems();
		setLoad(false);
	}, [load, index, data, props.data]);

	return (
		<div ref={listRef}>
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
