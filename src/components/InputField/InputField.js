import React from 'react';
import PropTypes from 'prop-types';

import Style from './InputField.style';

const InputField = ({
	/* eslint-disable react/prop-types */
	field,
	form,
	/* eslint-enable react/prop-types */
	icon,
	hasError,
	...props
}) => (
	<Style.Wrapper>
		{icon && (
			<Style.IconContainer>
				<Style.Icon className={icon} />
			</Style.IconContainer>
		)}
		<Style.Input
			{...field}
			{...props}
			icon={icon}
			hasError={hasError}
		/>
	</Style.Wrapper>
);

InputField.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	type: PropTypes.string,
	autoComplete: PropTypes.string,
	icon: PropTypes.string,
	marginTop: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginLeft: PropTypes.bool,
	marginRight: PropTypes.bool,
	hasError: PropTypes.bool,
};

export default InputField;
