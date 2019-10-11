import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mediaquery } from 'style';

const availableSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const WrapperElement = styled.div`
	display: inherit;
	${(props) => props.on && mediaquery(props.on, `
		display: none;
	`)}
`;

const Hide = ({ children, ...props }) => <WrapperElement {...props}>{children}</WrapperElement>;

Hide.propTypes = {
	children: PropTypes.node,
	on: PropTypes.oneOf(availableSizes),
};

export default Hide;
