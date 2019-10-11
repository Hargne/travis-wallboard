import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { props as navbarStoreProps } from 'store/modules/navbar.store';

import Show from 'hoc-components/Show';
import Hide from 'hoc-components/Hide';

import NavbarStyle from './Navbar.style';

const Navbar = inject((store) => ({
	authStore: store.rootStore.auth,
	navbarStore: store.rootStore.navbar,
}))(observer(({
	navbarStore,
}) => (
	<NavbarStyle.Wrapper isOpen={navbarStore.isOpen}>
		<Show on="sm">
			<NavbarStyle.Container>
				<NavbarStyle.Link
					to="/"
					exact
				>
					<i className="fas fa-tachometer-alt" />
				</NavbarStyle.Link>
				<NavbarStyle.Link to="/settings">
					<i className="fas fa-cog" />
				</NavbarStyle.Link>
			</NavbarStyle.Container>
		</Show>
		<Hide on="sm">
			<NavbarStyle.Container>
				<NavbarStyle.MenuButton onClick={navbarStore.methods.toggle}>
					<i className="fas fa-bars" />
				</NavbarStyle.MenuButton>
			</NavbarStyle.Container>
		</Hide>
	</NavbarStyle.Wrapper>
)));

Navbar.propTypes = {
	navbarStore: navbarStoreProps,
	userData: PropTypes.object,
};

export default Navbar;
