import styled from 'styled-components';
import { typography } from 'style';

export const headingSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const commonStyle = props => `
	font-family: ${typography.font.base};
	font-weight: ${typography.weight.thin};
	margin-top: 0;
	${props.textAlign ? `text-align: ${props.textAlign};` : ''}
	${props.noMargin ? 'margin-bottom: 0' : ''}
`;

export default {
	h1: styled.h1`
		font-size: ${typography.size.heading.h1};
		${props => commonStyle(props)}
	`,
	h2: styled.h2`
		font-size: ${typography.size.heading.h2};
		${props => commonStyle(props)}
	`,
	h3: styled.h3`
		font-size: ${typography.size.heading.h3};
		${props => commonStyle(props)}
	`,
	h4: styled.h4`
		font-size: ${typography.size.heading.h4};
		${props => commonStyle(props)}
	`,
	h5: styled.h5`
		font-size: ${typography.size.heading.h5};
		${props => commonStyle(props)}
	`,
	h6: styled.h6`
		font-size: ${typography.size.heading.h6};
		${props => commonStyle(props)}
	`,
};
