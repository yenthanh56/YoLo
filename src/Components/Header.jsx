import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import logo from "../assets/images/Logo-2.png";
import Notice from "./Notice";

const mainNav = [
	{
		display: "Trang chủ",
		path: "/",
	},
	{
		display: "Sản phẩm",
		path: "/catalog",
	},
	{
		display: "Phụ kiện",
		path: "/accessories",
	},
	{
		display: "Liên hệ",
		path: "/contact",
	},
];

function Header() {
	const { pathname } = useLocation();
	const activeNav = mainNav.findIndex((e) => e.path === pathname);
	const headerRef = useRef(null);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (
				document.body.scrollTop > 80 ||
				document.documentElement.scrollTop > 80
			) {
				headerRef.current.classList.add("shrink");
			} else {
				headerRef.current.classList.remove("shrink");
			}
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);

	const menuLeft = useRef(null);
	const menutoggleLeft = () => menuLeft.current.classList.toggle("active");

	let [count, setCount] = useState(0);

	return (
		<div className="header" ref={headerRef}>
			<div className="container">
				<div className="header__logo">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<div className="header__menu">
					<div
						className="header__menu__moblie-toggle"
						onClick={menutoggleLeft}
					>
						<i className="bx bx-menu-alt-left"></i>
					</div>
					<div className="header__menu__left" ref={menuLeft}>
						<div
							className="header__menu__left__close"
							onClick={menutoggleLeft}
						>
							<i className="bx bx-chevron-left"></i>
						</div>
						{mainNav.map((item, index) => (
							<div
								key={index}
								className={`header__menu__item header__menu__left__item ${
									activeNav === index ? "active" : ""
								}`}
								onClick={menutoggleLeft}
							>
								<Link to={item.path}>
									<span>{item.display}</span>
								</Link>
							</div>
						))}
					</div>
					<div className="header__menu__right">
						<div className="header__menu__item header__menu__right__item">
							<i className="bx bx-search"></i>
						</div>
						<div className="header__menu__item header__menu__right__item">
							<Link to="/cart">
								<i className="bx bx-shopping-bag"></i>
							</Link>
							<Notice notice={count} />
						</div>
						<div className="header__menu__item header__menu__right__item">
							<i className="bx bx-user"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
