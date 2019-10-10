import React from 'react';
import PropTypes from 'prop-types';

import Style from './ViewWrapper.style';

const Section = ({
	children,
	...props
}) => (
	<Style.Wrapper {...props}>
		<Style.Content>
			{children}
		</Style.Content>
	</Style.Wrapper>
);
Section.propTypes = {
	children: PropTypes.node,
};
export default Section;
