import styled from 'styled-components';
import { colors, typography, layout } from 'style';

export default {
	Wrapper: styled.div`
		position: relative;
		z-index: 1;
	`,
	Select: styled.select`
		font-family: ${typography.font.base};
		font-size: ${typography.size.text.xs};
		font-weight: ${typography.weight.bold};
		background-color: ${colors.general.fadedInput};
		color: ${colors.general.text};
		padding: 1rem 1rem;
		border: ${layout.border.width} solid;
		border-color: ${colors.general.border};
		border-radius: ${layout.border.radius};
		width: 100%;
		box-sizing: border-box;
		display: block;
		-moz-appearance: none;
		-webkit-appearance: none;
		appearance: none;
		padding-right: 2.5rem;
		outline: 0;

		${props => props.hasError && `
			border-color: ${colors.danger.color};
			color: ${colors.danger.color};
			box-shadow: 0 0 10px ${colors.danger.color};
		`}

		${props => props.marginTop && `margin-top: ${layout.margin.sm};`}
		${props => props.marginBottom && `margin-bottom: ${layout.margin.sm};`}
		${props => props.marginLeft && `margin-left: ${layout.margin.sm};`}
		${props => props.marginRight && `margin-right: ${layout.margin.sm};`}
	`,
	Arrow: styled.i`
		position: absolute;
		right: 1rem;
		top: 1rem;
	`,
};
