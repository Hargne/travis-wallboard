import React from 'react';
import PropTypes from 'prop-types';

import Style from './Section.style';

const Section = ({
	children,
	title,
	...props
}) => (
	<Style.Container {...props}>
		{title && (
			<Style.Title
				size="h6"
				noMargin
			>
				{title}
			</Style.Title>
		)}
		{children}
	</Style.Container>
);
Section.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string,
	color: PropTypes.string,
};
export default Section;
