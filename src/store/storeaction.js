import { extendObservable, action } from 'mobx';
import PropTypes from 'prop-types';

export const STATES = {
	INITIAL: 'initial',
	LOADING: 'loading',
	COMPLETE: 'complete',
	ERROR: 'error',
};

class StoreAction {
	constructor(method) {
		extendObservable(this, {
			state: STATES.INITIAL,
			get isLoading() { return this.state === STATES.LOADING; },
			get hasError() { return this.state === STATES.ERROR; },
			get isComplete() { return this.state === STATES.COMPLETE; },
			updateState: action((state) => { this.state = state; }),
			data: null,
		});

		this.run = method;
	}
}

export const props = PropTypes.shape({
	state: PropTypes.string,
	isLoading: PropTypes.bool,
	hasError: PropTypes.bool,
	isComplete: PropTypes.bool,
	updateState: PropTypes.func,
	data: PropTypes.any,
});

export default StoreAction;
