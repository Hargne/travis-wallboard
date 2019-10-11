import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { props as navbarStoreProps } from 'store/modules/navbar.store';

import Navbar from 'components/Navbar/Navbar';
import NavbarOffScreen from 'components/Navbar/Navbar.Offscreen';

import Style from './ViewWrapper.style';

const Section = inject((store) => ({
	authStore: store.rootStore.auth,
	navbarStore: store.rootStore.navbar,
}))(observer(({
	children,
	authStore,
	navbarStore,
	...props
}) => (
	<Style.Wrapper {...props}>
		{navbarStore.isOpen && (
			<Style.Overlay
				onClick={navbarStore.methods.toggle}
				key="viewwrapper-overlay"
			/>
		)}
		{authStore.isLoggedIn && <NavbarOffScreen />}
		<Style.Container>
			{authStore.isLoggedIn && <Navbar />}
			<Style.Content isNavbarOpen={navbarStore.isOpen}>
				{children}
			</Style.Content>
		</Style.Container>
	</Style.Wrapper>
)));
Section.propTypes = {
	children: PropTypes.node,
	navbarStore: navbarStoreProps,
};
export default Section;
