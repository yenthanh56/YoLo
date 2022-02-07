import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

HeroSlider.propTypes = {
	data: PropTypes.array.isRequired,
	control: PropTypes.bool.isRequired,
	auto: PropTypes.bool.isRequired,
	timeOut: PropTypes.number.isRequired,
};

function HeroSlider(props) {
	const { data, control, auto, timeOut } = props;
	const [activeSlider, setActiveSlider] = useState(0);
	const setTimeOut = timeOut ? timeOut : 3000;

	const nextSlider = useCallback(() => {
		const index = activeSlider + 1 === data.length ? 0 : activeSlider + 1;

		setActiveSlider(index);
	}, [activeSlider, data]);

	const prevSlider = () => {
		const index = activeSlider - 1 < 0 ? data.length - 1 : activeSlider - 1;
		if (index) {
		}
		setActiveSlider(index);
	};

	useEffect(() => {
		if (auto) {
			const sliderAuto = setInterval(() => {
				nextSlider();
			}, setTimeOut);
			return () => {
				clearInterval(sliderAuto);
			};
		}
	}, [nextSlider, setTimeOut, auto]);

	return (
		<div className="hero-slider">
			{data.map((item, index) => (
				<HeroSliderItem
					key={index}
					item={item}
					active={index === activeSlider}
				/>
			))}
			{/* next prev page */}
			{control ? (
				<div className="hero-slider__control">
					<div
						className="hero-slider__control__item"
						onClick={prevSlider}
					>
						<i className="bx bx-chevron-left"></i>
					</div>
					<div className="hero-slider__control__item__page">
						<div className="index">
							{activeSlider + 1} / {data.length}
						</div>
					</div>
					<div
						className="hero-slider__control__item"
						onClick={nextSlider}
					>
						<i className="bx bx-chevron-right"></i>
					</div>
				</div>
			) : null}
		</div>
	);
}
const HeroSliderItem = (props) => {
	const { item, active } = props;
	return (
		<div className={`hero-slider__item ${active ? "active" : ""}`}>
			<div className="hero-slider__item__info">
				<div
					className={`hero-slider__item__info__title color-${item.color}`}
				>
					<span>{item.title}</span>
				</div>
				<div className="hero-slider__item__info__description">
					<span>{item.description}</span>
				</div>
				<div className="hero-slider__item__info__btn">
					<Link to={item.path}>
						<button>Xem chi tiết</button>
					</Link>
				</div>
			</div>
			<div className="hero-slider__item__image">
				<div className={`shape bg-${item.color}`}></div>
				<img src={item.img} alt="" />
			</div>
		</div>
	);
};

export default HeroSlider;
