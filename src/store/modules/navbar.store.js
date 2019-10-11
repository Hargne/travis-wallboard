import { extendObservable } from 'mobx';
import PropTypes from 'prop-types';

class NavbarStore {
	constructor() {
		extendObservable(this, {
			isOpen: false,
		});
	}

	methods = {
		open: () => {
			this.isOpen = true;
		},
		close: () => {
			this.isOpen = false;
		},
		toggle: () => {
			this.isOpen = !this.isOpen;
		},
	}
}

export const props = PropTypes.shape({
	isOpen: PropTypes.bool,
});

export default NavbarStore;
