import { decorate, computed, extendObservable } from 'mobx';
import PropTypes from 'prop-types';
import StoreAction, { STATES, props as StoreActionProps } from 'store/storeaction';

class AuthStore {
	constructor() {
		extendObservable(this, {
			token: null,
		});

		this.methods = {
			setAccessToken: new StoreAction((token) => new Promise((Resolve) => {
				this.methods.setAccessToken.updateState(STATES.LOADING);
				// Attempt to fetch the access token from the Local Storage
				const accessToken = localStorage.getItem('accessToken');
				if (!accessToken || accessToken !== token) {
					localStorage.setItem('accessToken', token);
					this.token = token;
				}
				return Resolve();
			})),
		};
	}

	get accessToken() {
		return this.token || localStorage.getItem('accessToken');
	}

	get isLoggedIn() {
		return !!(this.token || localStorage.getItem('accessToken'));
	}
}

decorate(AuthStore, {
	accessToken: computed,
});

AuthStore.propTypes = {
	accessToken: PropTypes.string,
	methods: PropTypes.shape({
		setAccessToken: StoreActionProps,
	}),
};

export default AuthStore;
