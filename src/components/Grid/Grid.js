import React from 'react';
import PropTypes from 'prop-types';

import StyledGrid from './Grid.style';

const Row = ({
	children,
	...props
}) => (
	<StyledGrid.Row {...props}>
		{children}
	</StyledGrid.Row>
);
Row.propTypes = {
	children: PropTypes.node,
};

const Column = ({
	children,
	...props
}) => (
	<StyledGrid.Column {...props}>
		{children}
	</StyledGrid.Column>
);
Column.propTypes = {
	children: PropTypes.node,
	flex: PropTypes.number,
	justifyContent: PropTypes.string,
};
Column.defaultProps = {
	flex: 1,
};

export default {
	Row,
	Column,
};
