import styled from 'styled-components';
import {
	colors,
	typography,
	layout,
	mediaquery,
} from 'style';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const sizeRelatedStyles = (size) => {
	switch (size) {
		case 'small':
			return `
				font-size: ${typography.size.text.xxs};
				padding: ${layout.padding.xs} ${layout.padding.sm};
			`;
		case 'medium':
		default:
			return `
				font-size: ${typography.size.text.sm};
				padding: ${layout.padding.sm} ${layout.padding.md};
			`;
	}
};

const btnStyle = props => `
	font-family: ${typography.font.base};
	font-weight: ${typography.weight.bold};
	text-align: center;
	box-sizing: border-box;
	border: 0;
	border-bottom: 0.25rem solid;
	text-transform: uppercase;
	transition: all 0.3s;
	border-radius: ${layout.border.radius};
	position: relative;
	width: 100%;
	display: block;
	outline: 0;
	overflow: hidden;

	${sizeRelatedStyles(props.size)}

	${!props.block ? mediaquery('sm', `
		width: initial;
		display: inline-block;
	`) : ''}
	${props.disabled ? `
		cursor: not-allowed;
	` : ''}

	${props.color ? `
		${!props.hollow ? `
			background-color: ${colors[props.color].color};
			color: ${colors[props.color].text};
			border-color: rgba(0,0,0,0.5);
			${!props.disabled ? `
				&:hover {
					color: ${colors[props.color].brighter.text};
					background-color: ${colors[props.color].brighter.color};
					border-color: ${colors[props.color].color};
					cursor: pointer;
					text-decoration: none;

					&:after {
						width: 120%;
						background-color: rgba(255,255,255,0);
						-webkit-transition: all 0.4s ease-in-out;
						-moz-transition: all 0.4s ease-in-out;
						transition: all 0.4s ease-in-out;
					}
				}
			` : `
				color: ${colors[props.color].brighter.color};
				border-color: ${colors[props.color].color};
			`}
		`
		: `
			border: ${layout.border.width} solid;
			background: none;
			border-color: ${colors[props.color].color};
			color: inherit;
			${!props.disabled ? `
				&:hover {
					background-color: ${colors[props.color].color};
					color: ${colors[props.color].text};
					cursor: pointer;
					&:after {
						width: 120%;
						background-color: rgba(255,255,255,0);
						-webkit-transition: all 0.4s ease-in-out;
						-moz-transition: all 0.4s ease-in-out;
						transition: all 0.4s ease-in-out;
					}
				}
			` : ''}
		`}
	` : ''}

	${props.marginTop ? `margin-top: ${layout.margin.md};` : ''}
	${props.marginBottom ? `margin-bottom: ${layout.margin.md};` : ''}
	${props.marginLeft ? `margin-left: ${layout.margin.md};` : ''}
	${props.marginRight ? `margin-right: ${layout.margin.md};` : ''}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background-color: rgba(255,255,255,0.4);
		-webkit-transition: none;
		-moz-transition: none;
		transition: none;
	}
`;

export default styled.button`
	${props => btnStyle(props)}
`;

export const LinkButton = styled(NavLink)`
	${props => btnStyle(props)}
`;

export const LoadingIcon = styled(Loader)`
`;
