import React from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

CheckBox.propTypes = {
	label: PropTypes.string.isRequired,
	checked: PropTypes.bool,
};

function CheckBox(props) {
	const { label, checked } = props;
	const inputRef = useRef(null);
	const onChange = () => {
		if (props.onChange) {
			props.onChange(inputRef.current);
		}
	};
	return (
		<label className="custom-checkbox">
			<input
				type="checkbox"
				ref={inputRef}
				checked={checked}
				onChange={onChange}
			/>
			<span className="custom-checkbox__checkmark">
				<i className="bx bx-check"></i>
			</span>
			{label}
		</label>
	);
}

export default CheckBox;
