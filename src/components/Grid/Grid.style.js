import styled from 'styled-components';

import { mediaquery } from 'style';

export default {
	Row: styled.div`
		display: flex;
		flex-direction: column;
		margin-bottom: 0.5rem;
		${mediaquery('sm', `
			flex-direction: row;
		`)}
	`,
	Column: styled.div`
		width: 100%;
		box-sizing: border-box;
		padding: 0.5rem 0;
		flex: ${(props) => (props.flex ? props.flex : 0)};
		${(props) => props.justifyContent && `
			display: flex;
			justify-content: ${props.justifyContent};
		`}

		${mediaquery('sm', `
			padding: 0.5rem;
		`)}

		&:first-child {
			padding-left: 0;
		}
		&:last-child {
			padding-right: 0;
		}
	`,
};
