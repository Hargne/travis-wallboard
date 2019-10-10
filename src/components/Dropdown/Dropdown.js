import React from 'react';
import PropTypes from 'prop-types';
import Style from './Dropdown.style';

const Dropdown = ({
	/* eslint-disable react/prop-types */
	field,
	form,
	/* eslint-enable react/prop-types */
	options,
	...props
}) => (
	<Style.Wrapper>
		<Style.Select
			{...field}
			{...props}
			hasError={(form && (form.touched[field.name] && !!form.errors[field.name]))}
		>
			{options && options.map((option, i) => (
				<option
					value={option.value}
					key={i}
				>
					{option.label}
				</option>
			))}
		</Style.Select>
		<Style.Arrow className="fas fa-caret-down" />
	</Style.Wrapper>
);

Dropdown.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.any,
			label: PropTypes.string,
		}),
	),
	marginTop: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginLeft: PropTypes.bool,
	marginRight: PropTypes.bool,
};

export default Dropdown;
