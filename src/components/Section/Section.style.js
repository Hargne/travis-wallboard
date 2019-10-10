import styled from 'styled-components';
import Heading from 'components/Heading/Heading';

import { layout, colors } from 'style';

export default {
	Container: styled.div`
		border-bottom: 0.25rem solid;
		border-color: ${colors.general.border};
		padding: ${layout.padding.sm};
		border-radius: ${layout.border.radius};
		background-color: ${colors.general.panel};
		color: ${colors.general.text};
		margin-bottom: ${layout.margin.md};

		${props => (props.color === 'none' ? `
			background-color: transparent;
			border: 0;
		` : '')}
	`,
	Title: styled(Heading)`
		color: ${colors.general.text};
	`,
};
