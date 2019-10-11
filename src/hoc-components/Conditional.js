import React from 'react';
import PropTypes from 'prop-types';

const Conditional = ({ children, GivenThat, Otherwise }) => {
	if (GivenThat) {
		return children;
	}
	return <Otherwise />;
};

Conditional.propTypes = {
	children: PropTypes.node,
	GivenThat: PropTypes.bool,
	Otherwise: PropTypes.func,
};

export default Conditional;
