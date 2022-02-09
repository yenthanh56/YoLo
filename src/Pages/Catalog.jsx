import React, { useState } from "react";
// import PropTypes from "prop-types";
// Catalog.propTypes = {};
import Helmet from "../Components/Helmet";
import ProductCard from "../Components/ProductCard";
import Gird from "../Components/Gird";
import CheckBox from "../Components/CheckBox";
import Button from "../Components/Button";

import ProductData from "../assets/fake-data/products";
import Category from "../assets/fake-data/category";
import productColor from "../assets/fake-data/product-color";
import productSize from "../assets/fake-data/product-size";
function Catalog() {
	const initFilter = {
		category: [],
		color: [],
		size: [],
	};
	const productList = ProductData.getAllProducts();
	const [products, setProducts] = useState(productList);

	const [filter, setFilter] = useState(initFilter);

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
					break;
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
						category: newColor,
					});
					break;
				case "SIZE":
					const newSize = filter.size.filter((e) => e !== item.size);
					setFilter({
						...filter,
						category: newSize,
					});
					break;

				default:
					break;
			}
		}
	};

	return (
		<Helmet title="Catalog">
			{console.log(filter)}
			<div className="catalog">
				<div className="catalog__filter">
					<div className="catalog__filter__widget">
						{/* type shirt */}
						<div className="catalog__filter__widget__title">
							Danh Mục Sản Phẩm
						</div>
						<div className="catalog__filter__widget__content">
							{Category.map((item, index) => (
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
									/>
								</div>
							))}
						</div>
						{/* end type shirt */}

						{/* type color */}
						<div className="catalog__filter__widget__title">
							Màu sắc
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
									/>
								</div>
							))}
						</div>
						{/* end type color */}

						{/* type size */}
						<div className="catalog__filter__widget__title">
							Kích cỡ
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
									/>
								</div>
							))}
						</div>
						{/* end type size */}

						<div className="catalog__filter__widget__btn">
							<Button size="sm">Xóa bộ lộc</Button>
						</div>
					</div>
				</div>

				<div className="catalog__content">
					<Gird col={3} mdCol={2} smCol={1} gap={20}>
						{products.map((item, index) => (
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
			</div>
		</Helmet>
	);
}

export default Catalog;
