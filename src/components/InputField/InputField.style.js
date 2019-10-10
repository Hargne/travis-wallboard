import styled from 'styled-components';
import { colors, typography, layout } from 'style';

export default {
	Wrapper: styled.div`
		position: relative;
		z-index: 1;
	`,
	Input: styled.input`
		font-family: ${typography.font.base};
		font-size: ${typography.size.text.xs};
		font-weight: ${typography.weight.normal};
		background-color: ${colors.general.input};
		color: ${colors.general.text};
		padding: 1rem 1rem;
		border: ${layout.border.width} solid;
		border-color: ${colors.general.border};
		border-radius: ${layout.border.radius};
		width: 100%;
		box-sizing: border-box;
		outline: none;
		&::placeholder {
			color: ${colors.general.fadedText};
			opacity: 1;
		}
		&::-ms-input-placeholder {
			color: ${colors.general.fadedText};
		}
		&:-ms-input-placeholder {
			color: ${colors.general.fadedText};
		}

		${(props) => props.hasError && `
			border-color: ${colors.danger.color};
			color: ${colors.danger.color};
			box-shadow: 0 0 10px ${colors.danger.color};
		`}

		${(props) => props.icon && 'padding-left: 3rem;'}

		${(props) => props.marginTop && `margin-top: ${layout.margin.sm};`}
		${(props) => props.marginBottom && `margin-bottom: ${layout.margin.sm};`}
		${(props) => props.marginLeft && `margin-left: ${layout.margin.sm};`}
		${(props) => props.marginRight && `margin-right: ${layout.margin.sm};`}
	`,
	IconContainer: styled.div`
		height: 100%;
		width: 3rem;
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	`,
	Icon: styled.i`
		color: ${colors.general.border};
	`,
};
