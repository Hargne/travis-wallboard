import styled from 'styled-components';

import { layout, colors } from 'style';

export default {
	Container: styled.div`
		position: relative;
		width: 100%;
		min-height: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		padding: ${layout.padding.sm};
		box-sizing: border-box;
		${(props) => props.backgroundImage && `
			background: url(${props.backgroundImage});
			background-size: cover;
			background-position: center;
		`}

		${(props) => props.color && `
			color: ${colors[props.color].text};
		`}
	`,
	Content: styled.div`
		position: relative;
		z-index: 1;
	`,
	Cover: styled.div`
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		opacity: 0.5;
		background-color: #111;
		${(props) => props.color && `
			background-color: ${colors[props.color].color};
		`}
	`,
};
