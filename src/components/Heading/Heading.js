import React from 'react';
import PropTypes from 'prop-types';

import StyledHeading, { headingSizes } from './Heading.style';

const Heading = ({
	children,
	size,
	...props
}) => {
	const HeadingElement = StyledHeading[size];
	return (
		<HeadingElement {...props}>
			{children}
		</HeadingElement>
	);
};

Heading.propTypes = {
	children: PropTypes.node,
	size: PropTypes.oneOf(headingSizes).isRequired,
	textAlign: PropTypes.string,
	noMargin: PropTypes.bool,
};

export default Heading;
