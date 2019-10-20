/* eslint no-unused-expressions: 0 */
import { createGlobalStyle } from 'styled-components';
import { typography, colors } from 'style';

export default createGlobalStyle`
	html, body {
		height: 100%;
		font-family: ${typography.font.base};
		font-size: 16px;
		font-weight: ${typography.weight.normal};
		margin: 0;
		background-color: ${colors.general.background};
		color: ${colors.general.text};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	a {
		color: ${colors.general.link};
		text-decoration: none;
	}
	a:hover {
		color: ${colors.primary.color};
		text-decoration: underline;
	}

	hr {
		border: 0;
		height: 1px;
		background: ${colors.general.fadedText};
	}

	#app {
		height: 100%;
	}
`;
