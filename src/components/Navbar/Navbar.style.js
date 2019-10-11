import Styled from 'styled-components';
import {
	typography,
	layout,
	colors,
	mediaquery,
} from 'style';
import { NavLink } from 'react-router-dom';

const navbarHeight = '3rem';
const offscreenWidth = '20rem';

export default {
	Wrapper: Styled.div`
		width: 100%;
		box-sizing: border-box;
		background-color: ${colors.secondary.color};
		color: ${colors.secondary.text};
		position: fixed;
		bottom: 0;
		left: 0;
		transition: all 0.3s;
		left: 0;
		z-index: 20;
		${(props) => props.isOpen && 'left: 5rem;'}
	`,
	Container: Styled.div`
		display: flex;
		align-items: center;
		width: 100%;
		height: ${navbarHeight};

		> div {
			height: 100%;
		}
	`,
	Logo: Styled.img`
	`,
	Link: Styled(NavLink)`
		color: ${colors.primary.text};
		padding: 0 ${layout.padding.sm};
		height: 100%;
		display: flex;
		align-items: center;
		font-weight: 700;
		position: relative;
		cursor: pointer;
		transition: 0.3s all;

		&:hover {
			background-color: ${colors.primary.brighter.color};
			color: ${colors.primary.brighter.text};
			text-decoration: none;
		}
	`,
	MenuButton: Styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 ${layout.padding.sm};

		i {
			font-size: 1.5rem;
		}
	`,
	Divider: Styled.div`
		flex-grow: 1;
	`,
	Offscreen: {
		Wrapper: Styled.div`
			width: ${offscreenWidth};
			height: 100%;
			box-sizing: border-box;
			background-color: #111;
			color: ${colors.primary.text};
			position: absolute;
			z-index: 50;
			top: 0;
			left: calc((${offscreenWidth} + 0.5rem) * -1);
			transition: all 0.3s;
			box-shadow: 0.5rem 0 0 rgba(0,0,0,0.3);

			${(props) => props.isOpen && 'left: 0;'}

			${mediaquery('sm', `
				display: none;
			`)}
		`,
		Content: Styled.div`
			padding: ${layout.padding.md} ${layout.padding.sm} ${layout.padding.sm} ${layout.padding.sm};
		`,
		CloseIcon: Styled.i`
			color: ${colors.primary.text};
			position: absolute;
			top: ${layout.padding.sm};
			right: ${layout.padding.sm};
			font-size: 1.5rem;
		`,
		Link: Styled(NavLink)`
			color: ${colors.primary.text};
			padding: ${layout.padding.xs} 0;
			height: 100%;
			display: flex;
			align-items: center;
			font-weight: ${typography.weight.bold};
			position: relative;
			cursor: pointer;

			&:hover {
				color: ${colors.primary.darker.text};
				text-decoration: none;
			}

			i {
				margin-left: ${layout.padding.xs};
			}
		`,
	},
};
