import axios from 'axios';
import ApiResolver from './ApiResolver';

class CoreHttpHandler {
    constructor() {
        this.apiEndpoint = 'https://reqres.in';
    
        this.config = {
            headers: {
                'content-type': 'text/plain',
            }
        };
    }

    request(name, service, params, success, failure) {

        // resolving the api request 
        const resolvedApi = ApiResolver.resolve(name, service);
        
        const apiCall = { ...resolvedApi };
        // console.log("apiCall >", apiCall)
        
        let apiPath = `${this.apiEndpoint}${apiCall.path}`;

        if (apiCall.headers.hasOwnProperty('client-token') && apiCall.headers['client-token'] === null) {
            apiCall.headers['lient-token'] = localStorage.getItem('client_token');

            if (apiCall.headers['client-token'] === null) throw new Error(`Cannot call remote service without authentication token`);
        }

        const _config = { headers: { ...apiCall.headers } };
        // console.log("_config >", _config)

        // checking the requests if coming with id as a key and value pair in path to PUT and GET
        if (params.key !== undefined && apiCall.method === 'get') {
            apiPath = apiPath.replace(params.key, params.value);
        }

        if (params.key !== undefined && (apiCall.method === 'put' || apiCall.method === 'post')) {
            apiPath = apiPath.replace(params.key, params.value);
        }

        if (apiCall.method === 'put' && params) {
            apiPath = apiPath.replace(params.key, params.value);
        }

        const args = [
            apiPath
        ];

        // normal requests without key value in path 
        if (apiCall.method === 'get') {
            args.push(_config);
        } else {
            if (apiCall.method === 'put' || apiCall.method === 'post') {
                if (params.params) {
                    args.push(params.params);
                } else args.push(params)
            } else {
                args.push(params);
            }

            args.push(_config);
        }

        // making axios http calls 
        axios[apiCall.method].apply(this, args).then(result => {
            success(result);
        })
        .catch(error => {
            failure(error);
        });

    }
}

export default new CoreHttpHandler;