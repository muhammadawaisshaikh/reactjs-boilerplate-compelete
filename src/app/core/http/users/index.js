class APIS {
    apis() {
        return {
            listing: {
                headers: {
                    'token': null
                },
                method: 'get',
                path: '/api/users'
            },
            add_user: {
                headers: {
                    'token': null
                },
                method: 'post',
                path: '/api/users'
            },
            get_user: {
                headers: {
                    'token': null
                },
                method: 'get',
                path: '/api/users/id'
            },
            update_user: {
                headers: {
                    'token': null
                },
                method: 'put',
                path: '/api/users/id'
            },
            delete_user: {
                headers: {
                    'token': null
                },
                method: 'put',
                path: '/api/users/id'
            },
        }
    }
}

export default new APIS;