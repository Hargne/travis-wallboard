import styled from 'styled-components';
import { colors, layout, typography } from 'style';

export default {
	BuildContainer: styled.div`
		display: flex;
	`,
	Build: styled.div`
		padding: ${layout.padding.sm};
		border-left: 0.5rem solid;
		${props => {
			switch(props.state) {
			case 'passed':
				return `
					border-color: ${colors.success.color};
				`;
			case 'errored':
				return `
					border-color: ${colors.danger.color};
				`;
			default:
				return `
					border-color: ${colors.general.border};
				`;
			}
		}}
	`,
	BuildBranch: styled.div`
		font-weight: ${typography.weight.bold};
		margin-bottom: ${layout.margin.sm};
	`,
};
