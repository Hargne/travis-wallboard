import React from 'react';
import PropTypes from 'prop-types';

import Style from './FieldMessage.style';

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
	color: PropTypes.string,
	inverse: PropTypes.bool,
	hollow: PropTypes.bool,
	align: PropTypes.oneOf(['left', 'center', 'right']),
	marginTop: PropTypes.bool,
	marginBottom: PropTypes.bool,
	marginLeft: PropTypes.bool,
	marginRight: PropTypes.bool,
};

FieldMessage.defaultProps = {
	color: 'danger',
};

export default FieldMessage;
