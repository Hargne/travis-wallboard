const mediaQuery = (size, css) => {
	const queries = {
		sm: '@media (min-width: 576px)',
		md: '@media (min-width: 768px)',
		lg: '@media (min-width: 992px)',
		xl: '@media (min-width: 1200px)',
	};
	return `${queries[size]} {
		${css}
	}`;
};
export default mediaQuery;
