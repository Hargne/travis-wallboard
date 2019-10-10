import styled from 'styled-components';
import { colors, layout, typography } from 'style';

export default {
	Wrapper: styled.div`
		font-family: ${typography.font.base};
		font-size: ${typography.size.text.xs};
		font-weight: ${typography.weight.normal};
		padding: ${layout.padding.xs};
		color: ${colors.general.fadedText};
		${props => props.align && `text-align: ${props.align}`}

		${props => props.marginTop && `margin-top: ${layout.margin.sm};`}
		${props => props.marginBottom && `margin-bottom: ${layout.margin.sm};`}
		${props => props.marginLeft && `margin-left: ${layout.margin.sm};`}
		${props => props.marginRight && `margin-right: ${layout.margin.sm};`}

		${(props) => {
		if (props.color) {
			if (!props.inverse) {
				return (!props.hollow) ? `
					background-color: ${colors[props.color].color};
					color: ${colors[props.color].text};
					border-color: ${colors[props.color].darker.color};
				` : `
					background-color: transparent;
					color: ${colors[props.color].color};
					border-color: ${colors[props.color].color};
				`;
			}
			return `
				background-color: ${colors[props.color].text};
				color: ${colors[props.color].color};
				border-color: ${colors[props.color].darker.color};
			`;
		}
		return null;
	}}
	`,
};
