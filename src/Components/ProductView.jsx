import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Button from "./Button";
import numberWithCommas from "./../utils/numberWithCommas";
import { addCart } from "../redux/ShoppingCart/cartItem";
import { remove } from "../redux/product-modal/productModalSlice";

ProductView.propTypes = {
	product: PropTypes.object,
};
function ProductView(props) {
	const history = useHistory();
	const disPatch = useDispatch();
	let { product } = props;
	if (product === undefined) {
		product = {
			title: "",
			image01: "",
			image02: "",

			price: 0,
			colors: [],
			size: [],
		};
	}

	const [previewimg, setPreviewimg] = useState(product.image01);

	const [descriptionExpand, setDescriptionExpand] = useState(false);

	const [color, setColor] = useState(null);
	const [size, setSize] = useState(null);
	const [quantity, setQuantity] = useState(1);

	const updateQuantity = (type) => {
		if (type === "plus") {
			setQuantity(quantity + 1);
		} else {
			setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
		}
	};

	const cancelProduct = () => {
		setColor(null);
		setSize(null);
		setQuantity(1);
	};

	const addToCart = () => {
		if (!color) {
			toast.warning("Bạn hãy chọn màu sắc");
			return;
		}
		if (!size) {
			toast.warning("Bạn hãy chọn kích cỡ");
			return;
		}
		disPatch(
			addCart({
				slug: product.slug,
				color: color,
				size: size,
				quantity: quantity,
				price: product.price,
			})
		);
		disPatch(remove());

		toast.success("Bạn đã thêm vào giỏ hàng thành công");
	};

	const addTobuy = () => {
		if (!color) {
			toast.warning("Bạn hãy chọn màu sắc");
			return;
		}
		if (!size) {
			toast.warning("Bạn hãy chọn kích cỡ");
			return;
		}
		//props.history.push("/cart");
		history.push("/cart");
		disPatch(
			addCart({
				slug: product.slug,
				color: color,
				size: size,
				quantity: quantity,
				price: product.price,
			})
		);
		disPatch(remove());

		toast.success("thành công");
	};

	useEffect(() => {
		setPreviewimg(product.image01);
		setQuantity(1);
		setColor(null);
		setSize(null);
	}, [product]);

	return (
		<div className="product">
			<div className="product__images">
				<div className="product__images__list">
					<div
						className="product__images__list__item"
						onClick={() => setPreviewimg(product.image01)}
					>
						<img src={product.image01} alt="" />
					</div>
					<div
						className="product__images__list__item"
						onClick={() => setPreviewimg(product.image02)}
					>
						<img src={product.image02} alt="" />
					</div>
				</div>
				<div className="product__images__main">
					<img src={previewimg} alt="" />
				</div>
				<div
					className={`product-description ${
						descriptionExpand ? "expand" : ""
					}`}
				>
					<div className="product-description__title">
						Chi tiết sản phẩm
					</div>
					<div
						className="product-description__content"
						dangerouslySetInnerHTML={{
							__html: product.description,
						}}
					></div>
					<div className="product-description__toggle">
						<Button
							size="sm"
							onclick={() =>
								setDescriptionExpand(!descriptionExpand)
							}
						>
							{descriptionExpand ? "Thu gọn" : "Xem thêm"}
						</Button>
					</div>
				</div>
			</div>

			<div className="product__info">
				<h1 className="product__info__title">{product.title}</h1>
				<div className="product__info__price">
					<span>{numberWithCommas(product.price)}</span>
				</div>

				<div className="product__info__item">
					<div className="product__info__item__title">Màu sắc</div>
					<div className="product__info__item__list">
						{product.colors.map((item, index) => (
							<div
								key={index}
								className={`product__info__item__list__item ${
									color === item ? "active" : ""
								}`}
								onClick={() => setColor(item)}
							>
								<div className={`circle bg-${item}`}></div>
							</div>
						))}
					</div>
				</div>
				<div className="product__info__item">
					<div className="product__info__item__title">Kích cỡ</div>
					<div className="product__info__item__list">
						{product.size.map((item, index) => (
							<div
								key={index}
								className={`product__info__item__list__item ${
									size === item ? "active" : ""
								}`}
								onClick={() => setSize(item)}
							>
								<div className="product__info__item__list__item__size">
									<span>{item}</span>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="product__info__item">
					<div className="product__info__item__title">Số lượng</div>
					<div className="product__info__item__quantity">
						<div
							className="product__info__item__quantity__btn"
							onClick={() => updateQuantity("minus")}
						>
							<i className="bx bx-minus"></i>
						</div>
						<div className="product__info__item__quantity__input">
							{quantity}
						</div>
						<div
							className="product__info__item__quantity__btn"
							onClick={() => updateQuantity("plus")}
						>
							<i className="bx bx-plus"></i>
						</div>
					</div>
				</div>

				<div className="product__info__item">
					<div className="product__info__item__cancel">
						<Button onclick={() => cancelProduct()}>
							Hủy chọn
						</Button>
					</div>
					<Button onclick={() => addToCart()}>Thêm vào giỏ</Button>
					<Button onclick={() => addTobuy()}>Mua ngay</Button>
				</div>
			</div>
		</div>
	);
}

export default withRouter(ProductView);
