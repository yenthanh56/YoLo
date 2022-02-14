import React from "react";
import PropTypes from "prop-types";

Notice.propTypes = {
	notice: PropTypes.number,
};

function Notice(props) {
	const { notice } = props;
	return <div className="notice">{notice}</div>;
}

export default Notice;
