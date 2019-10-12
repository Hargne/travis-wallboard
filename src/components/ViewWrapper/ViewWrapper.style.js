import styled from 'styled-components';

import { layout, mediaquery, colors } from 'style';

export default {
	Wrapper: styled.div`
		height: 100%;
	`,
	Overlay: styled.div`
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0,0,0,0);
		z-index: 10;

		${mediaquery('sm', `
			display: none;
		`)}
	`,
	Container: styled.div`
		min-height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		grid-template-columns: 100%;
	`,
	Content: styled.div`
		transition: all 0.3s;
		position: relative;
		left: 0;
		opacity: 1;
		box-sizing: border-box;
		margin-bottom: 2rem;
		${(props) => !props.noPadding && `
			padding: ${layout.padding.md};
		`}
		${(props) => props.isNavbarOpen && `
			left: 5rem;
		`}
		${(props) => !!(props.color && colors[props.color]) && `
			background-color: ${colors[props.color].color};
			color: ${colors[props.color].text};

			a {
				color: ${colors[props.color].text};

				&:hover {
					color: ${colors[props.color].brighter.text};
				}
			}
		`}
	`,
};
