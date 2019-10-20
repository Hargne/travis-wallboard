import styled from 'styled-components';
import { colors, layout, typography } from 'style';

export default {
	Container: styled.div`
		display: flex;
		flex-direction: column;
		padding: ${layout.padding.sm};
		border-left: 0.75rem solid;
		height: 100%;
		background-color: ${colors.general.panel};
		width: 18rem;
		${(props) => {
		switch (props.state) {
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
					border-color: ${colors.general.fadedText};
				`;
		}
	}}

		i {
			margin-right: ${layout.margin.xxs};
		}
	`,
	BranchName: styled.div`
		font-weight: ${typography.weight.bold};
		margin-bottom: ${layout.margin.sm};
		${(props) => {
		switch (props.state) {
			case 'passed':
				return `
					color: ${colors.success.color};
				`;
			case 'errored':
				return `
					color: ${colors.danger.color};
				`;
			default:
				return `
					color: ${colors.general.fadedText};
				`;
		}
	}}
	`,
	AuthorAndTime: styled.span`
		font-size: ${typography.size.text.xxs};
		margin-bottom: ${layout.margin.xs};
	`,
	CommitMsg: styled.div`
		font-size: ${typography.size.text.xxs};
		font-style: italic;
		color: ${colors.general.fadedText};
		flex-grow: 1;
		padding-left: ${layout.padding.sm};
	`,
	Duration: styled.div`
		font-size: ${typography.size.text.xxs};
		margin-bottom: ${layout.margin.xs};
		color: ${colors.general.fadedText};
	`,
};
