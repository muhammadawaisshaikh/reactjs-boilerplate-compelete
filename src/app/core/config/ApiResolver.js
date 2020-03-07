
import Users from '../http/users';

class ApiResolver {

    constructor() {
        this.apis = {
            users: Users.apis()
        }
    }

    resolve(name, apiCall) {

        if(!this.apis[name]) throw new Error(`Failed to resolve api [${name}]`);

        if(!this.apis[name][apiCall]) throw new Error(`Failed to resolve api call [${apiCall}]`);

        return this.apis[name][apiCall];

    }

}

export default new ApiResolver;