import AuthStore from './modules/auth.store';
import RepositoryStore from './modules/repository.store';

class RootStore {
	constructor() {
		this.auth = new AuthStore(this);
		this.repository = new RepositoryStore(this);
	}

	getAccessToken() {
		return this.auth.accessToken;
	}
}

export default RootStore;
