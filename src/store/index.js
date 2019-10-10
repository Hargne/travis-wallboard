import Auth from './modules/auth.store';
import ProjectStore from './modules/project.store';

class RootStore {
	constructor() {
		this.auth = new Auth(this);
		this.project = new ProjectStore(this);
	}

	getAccessToken() {
		return this.auth.accessToken;
	}
}

export default RootStore;
