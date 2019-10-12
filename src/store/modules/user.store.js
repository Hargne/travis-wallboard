import { decorate, computed, extendObservable } from 'mobx';
import PropTypes from 'prop-types';
import StoreAction, { STATES, props as StoreActionProps } from 'store/storeaction';

class UserStore {
	constructor(rootStore) {
		this.rootStore = rootStore;
		extendObservable(this, {
			settings: {
				refreshInterval: 30 * (60 * 1000), // 30 min
			},
		});

		this.methods = {
			loadSettings: new StoreAction(() => new Promise((Resolve) => {
				this.methods.loadSettings.updateState(STATES.LOADING);
				// Attempt to fetch the settings from the local storage
				const storedSettings = JSON.parse(localStorage.getItem('settings'));
				if (storedSettings) {
					this.settings = storedSettings;
				}
				this.methods.loadSettings.updateState(STATES.COMPLETE);
				return Resolve(storedSettings);
			})),
			saveSettings: new StoreAction(({
				refreshInterval,
			}) => new Promise((Resolve) => {
				this.methods.saveSettings.updateState(STATES.LOADING);
				if (refreshInterval) {
					this.settings.refreshInterval = refreshInterval;
				}
				localStorage.setItem('settings', JSON.stringify(this.settings));
				this.methods.saveSettings.updateState(STATES.COMPLETE);
				return Resolve(this.settings);
			})),
		};
	}

	get getRefreshInterval() {
		return (this.settings) ? this.settings.refreshInterval : 0;
	}
}

decorate(UserStore, {
	getRefreshInterval: computed,
});

UserStore.propTypes = {
	settings: PropTypes.shape({
		refreshInterval: PropTypes.number,
	}),
	methods: PropTypes.shape({
		loadSettings: StoreActionProps,
		saveSettings: StoreActionProps,
	}),
};

export default UserStore;
