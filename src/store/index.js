import AuthStore from './modules/auth.store';
import RepositoryStore from './modules/repository.store';
import NavbarStore from './modules/navbar.store';
import UserStore from './modules/user.store';

class RootStore {
	constructor() {
		this.auth = new AuthStore(this);
		this.repository = new RepositoryStore(this);
		this.navbar = new NavbarStore(this);
		this.user = new UserStore(this);
	}

	getAccessToken() {
		return this.auth.accessToken;
	}
}

export default RootStore;
