import React, { useState, useCallback, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// Catalog.propTypes = {};
import Helmet from "../Components/Helmet";
// import ProductCard from "../Components/ProductCard";
// import Gird from "../Components/Gird";
import CheckBox from "../Components/CheckBox";
import Button from "../Components/Button";

import ProductData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import productColor from "../assets/fake-data/product-color";
import productSize from "../assets/fake-data/product-size";
import InfinityList from "../Components/InfinityList";
function Catalog() {
	const filterRef = useRef(null);
	const initFilter = {
		category: [],
		color: [],
		size: [],
	};
	const productList = ProductData.getAllProducts();
	const [products, setProducts] = useState(productList);
	const [filter, setFilter] = useState(initFilter);

	const updateProducts = useCallback(() => {
		let temp = productList;
		if (filter.category.length > 0) {
			temp = temp.filter((e) => filter.category.includes(e.categorySlug));
		}
		if (filter.color.length > 0) {
			temp = temp.filter((e) => {
				const check = e.colors.find((color) =>
					filter.color.includes(color)
				);
				return check !== undefined;
			});
		}
		if (filter.size.length > 0) {
			temp = temp.filter((e) => {
				const check = e.size.find((size) => filter.size.includes(size));
				return check !== undefined;
			});
		}
		setProducts(temp);
	}, [filter, productList]);
	useEffect(() => {
		updateProducts();
	}, [updateProducts]);

	const filterSelect = (type, checked, item) => {
		if (checked) {
			switch (type) {
				case "CATEGORY":
					setFilter({
						...filter,
						category: [...filter.category, item.categorySlug],
					});
					break;
				case "COLOR":
					setFilter({
						...filter,
						color: [...filter.color, item.color],
					});
					break;
				case "SIZE":
					setFilter({
						...filter,
						size: [...filter.size, item.size],
					});
					break;

				default:
			}
		} else {
			switch (type) {
				case "CATEGORY":
					const newCategory = filter.category.filter(
						(e) => e !== item.categorySlug
					);
					setFilter({
						...filter,
						category: newCategory,
					});
					break;
				case "COLOR":
					const newColor = filter.color.filter(
						(e) => e !== item.color
					);
					setFilter({
						...filter,
						color: newColor,
					});
					break;
				case "SIZE":
					const newSize = filter.size.filter((e) => e !== item.size);
					setFilter({
						...filter,
						size: newSize,
					});
					break;

				default:
			}
		}
	};

	const clearFilter = () => {
		setFilter(initFilter);
	};
	const menuFilterToggle = () => {
		filterRef.current.classList.toggle("active");
	};

	return (
		<Helmet title="Catalog">
			<div className="catalog">
				<div className="catalog__filter" ref={filterRef}>
					<div
						className="catalog__filter__btnbackfilter"
						onClick={() => menuFilterToggle()}
					>
						<i className="bx bx-arrow-back"></i>
					</div>
					<div className="catalog__filter__widget">
						{/* type shirt */}
						<div className="catalog__filter__widget__title">
							Danh M???c S???n Ph???m
						</div>
						<div className="catalog__filter__widget__content">
							{category.map((item, index) => (
								<div
									key={index}
									className="catalog__filter__widget__content__item"
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect(
												"CATEGORY",
												input.checked,
												item
											)
										}
										checked={filter.category.includes(
											item.categorySlug
										)}
									/>
								</div>
							))}
						</div>
						{/* end type shirt */}

						{/* type color */}
						<div className="catalog__filter__widget__title">
							M??u s???c
						</div>
						<div className="catalog__filter__widget__content">
							{productColor.map((item, index) => (
								<div
									key={index}
									className="catalog__filter__widget__content__item"
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect(
												"COLOR",
												input.checked,
												item
											)
										}
										checked={filter.color.includes(
											item.color
										)}
									/>
								</div>
							))}
						</div>
						{/* end type color */}

						{/* type size */}
						<div className="catalog__filter__widget__title">
							K??ch c???
						</div>
						<div className="catalog__filter__widget__content">
							{productSize.map((item, index) => (
								<div
									key={index}
									className="catalog__filter__widget__content__item"
								>
									<CheckBox
										label={item.display}
										onChange={(input) =>
											filterSelect(
												"SIZE",
												input.checked,
												item
											)
										}
										checked={filter.size.includes(
											item.size
										)}
									/>
								</div>
							))}
						</div>
						{/* end type size */}

						<div className="catalog__filter__widget__btn">
							<Button size="sm" onclick={clearFilter}>
								X??a b??? l???c
							</Button>
						</div>
					</div>
				</div>

				<div className="catalog__filter__btnshowfilter">
					<Button size="sm" onclick={() => menuFilterToggle()}>
						B??? L???c Nhanh
					</Button>
				</div>

				<div className="catalog__content">
					<InfinityList data={products} />
				</div>
			</div>
		</Helmet>
	);
}

export default Catalog;
