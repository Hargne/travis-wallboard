import styled from 'styled-components';
import { colors, layout, typography } from 'style';

export default {
	Wrapper: styled.div`
		font-family: ${typography.font.base};
		font-size: ${typography.size.text.xs};
		font-weight: ${typography.weight.bold};
		padding: ${layout.padding.xs} 0;
		color: ${colors.general.fadedText};
		${(props) => props.align && `text-align: ${props.align}`}

		${(props) => props.marginTop && `margin-top: ${layout.margin.sm};`}
		${(props) => props.marginBottom && `margin-bottom: ${layout.margin.sm};`}
		${(props) => props.marginLeft && `margin-left: ${layout.margin.sm};`}
		${(props) => props.marginRight && `margin-right: ${layout.margin.sm};`}
	`,
};
