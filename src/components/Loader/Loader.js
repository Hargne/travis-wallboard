import React from 'react';
import PropTypes from 'prop-types';

import LoaderStyle from './Loader.style';

const Loader = ({ children, inverted }) => (
	<LoaderStyle.Container>
		<LoaderStyle.Animation inverted={inverted} />
		<LoaderStyle.Text>
			{children}
		</LoaderStyle.Text>
	</LoaderStyle.Container>
);
Loader.propTypes = {
	children: PropTypes.node,
	inverted: PropTypes.bool,
};
export default Loader;
