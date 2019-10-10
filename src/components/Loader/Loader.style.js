import styled, { keyframes } from 'styled-components';

import { typography, colors } from 'style';

const loadingKeyframes = keyframes`
	0%    { transform: rotate(0deg); }
	100%  { transform: rotate(360deg); }
`;

export default {
	Container: styled.div`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	`,
	Animation: styled.div`
		height: 1rem;
		width: 1rem;
		animation: ${loadingKeyframes} 0.8s infinite linear;
		border: 0.25rem solid ${props => (props.inverted ? colors.general.background : colors.general.text)};
		border-right-color: transparent;
		border-radius: 50%;
	`,
	Text: styled.span`
		font-size: ${typography.size.text.xs};
		font-weight: ${typography.weight.bold};
	`,
};
