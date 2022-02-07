import React from "react";
import PropTypes from "prop-types";

Helmet.propTypes = {
	title: PropTypes.string.isRequired,
};

function Helmet(props) {
	document.title = "Yolo -" + props.title;

	return <div>{props.children}</div>;
}

export default Helmet;
