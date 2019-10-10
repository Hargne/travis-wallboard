import React from 'react';
import PropTypes from 'prop-types';

import Style from './Jumbotron.style';

const Jumbotron = ({
	children,
	color,
	...props
}) => (
	<Style.Container
		color={color}
		{...props}
	>
		<Style.Content>
			{children}
		</Style.Content>
		<Style.Cover color={color} />
	</Style.Container>
);
Jumbotron.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	backgroundImage: PropTypes.string,
	color: PropTypes.string,
};
export default Jumbotron;
