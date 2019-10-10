import React from 'react';
import PropTypes from 'prop-types';
import StyledButton, { LinkButton, LoadingIcon } from './Button.style';

const Button = ({
	children,
	to,
	isLoading,
	...props
}) => (!to ? (
	<StyledButton {...props}>
		{!isLoading && children}
		{isLoading && <LoadingIcon inverted={!props.hollow} />}
	</StyledButton>
) : (
	<LinkButton {...props} to={to}>
		{!isLoading && children}
		{isLoading && <LoadingIcon inverted={!props.hollow} />}
	</LinkButton>
));

Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	color: PropTypes.string,
	marginTop: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginLeft: PropTypes.bool,
	marginRight: PropTypes.bool,
	hollow: PropTypes.bool,
	block: PropTypes.bool,
	to: PropTypes.string,
	isLoading: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
	color: 'neutral',
};

export default Button;
