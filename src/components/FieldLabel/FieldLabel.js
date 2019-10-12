import React from 'react';
import PropTypes from 'prop-types';

import Style from './FieldLabel.style';

const FieldMessage = ({
	children,
	...props
}) => (
	<Style.Wrapper {...props}>
		{children}
	</Style.Wrapper>
);

FieldMessage.propTypes = {
	children: PropTypes.node,
	inverse: PropTypes.bool,
	hollow: PropTypes.bool,
	align: PropTypes.oneOf(['left', 'center', 'right']),
	marginTop: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginLeft: PropTypes.bool,
	marginRight: PropTypes.bool,
};

export default FieldMessage;
