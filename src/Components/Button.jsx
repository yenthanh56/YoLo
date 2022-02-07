import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
	backgroundColor: PropTypes.string,
	size: PropTypes.string,
	icon: PropTypes.string,
	onclick: PropTypes.func,
	animation: PropTypes.bool,
};

function Button(props) {
	const { backgroundColor, size, icon, animation, onclick, children } = props;

	const bg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
	const Size = size ? "btn-" + size : "";
	const Animation = animation ? "btn-animation" : "";

	return (
		<button
			className={`btn ${bg} ${Size} ${Animation}`}
			onClick={onclick ? () => onclick() : null}
		>
			<span className="btn__txt">{children}</span>
			{icon ? (
				<span className="btn__icon">
					<i className={`${icon} bx-tada`}></i>
				</span>
			) : null}
		</button>
	);
}

export default Button;
