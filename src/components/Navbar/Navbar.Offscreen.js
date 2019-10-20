import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { props as navbarStoreProps } from 'store/modules/navbar.store';

import NavbarStyle from './Navbar.style';

const NavbarOffScreen = inject((store) => ({
	navbarStore: store.rootStore.navbar,
}))(observer(({
	navbarStore,
	...props
}) => (
	<NavbarStyle.Offscreen.Wrapper
		isOpen={navbarStore.isOpen}
		{...props}
	>
		<NavbarStyle.Offscreen.Content>
			<NavbarStyle.Offscreen.CloseIcon
				className="fas fa-times"
				onClick={navbarStore.methods.close}
			/>

			<NavbarStyle.Offscreen.Link
				to="/"
				exact
				onClick={navbarStore.methods.close}
			>
				<i className="fas fa-tachometer-alt" /> Dashboard
			</NavbarStyle.Offscreen.Link>

			<NavbarStyle.Offscreen.Link
				to="/settings"
				exact
				onClick={navbarStore.methods.close}
			>
				<i className="fas fa-cog" /> Settings
			</NavbarStyle.Offscreen.Link>

		</NavbarStyle.Offscreen.Content>
	</NavbarStyle.Offscreen.Wrapper>
)));

NavbarOffScreen.propTypes = {
	navbarStore: navbarStoreProps,
	userData: PropTypes.object,
};

export default NavbarOffScreen;
