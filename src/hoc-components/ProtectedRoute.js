import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { isValidElementType } from 'react-is';

const ProtectedRoute = ({
	component: Component,
	allowAccess,
	readyToEvaluate,
	redirectTo,
	...rest
}) => (
	<Route {...rest} render={(props) => {
		if (readyToEvaluate && allowAccess === true) {
			return <Component {...props} />;
		}
		if (readyToEvaluate && allowAccess === false) {
			return <Redirect to={redirectTo} />;
		}
		return null;
	}} />
);

ProtectedRoute.propTypes = {
	component: (props, propName) => {
		if (props[propName] && !isValidElementType(props[propName])) {
			return new Error('Invalid prop "component" supplied to "Route": the prop is not a valid React component');
		}
		return null;
	},
	readyToEvaluate: PropTypes.bool,
	allowAccess: PropTypes.bool,
	redirectTo: PropTypes.string,
};
ProtectedRoute.defaultProps = {
	redirectTo: '/login',
};

export default ProtectedRoute;
