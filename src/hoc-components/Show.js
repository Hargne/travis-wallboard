import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { mediaquery } from 'style';

const availableSizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const WrapperElement = styled.div`
	display: none;
	${(props) => props.on && mediaquery(props.on, `
		display: inherit;
	`)}
`;

const Show = ({ children, ...props }) => <WrapperElement {...props}>{children}</WrapperElement>;

Show.propTypes = {
	children: PropTypes.node,
	on: PropTypes.oneOf(availableSizes),
};

export default Show;
