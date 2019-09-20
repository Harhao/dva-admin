export default {
    namespace: 'global',
    state: {
        isAuth: true,
        userInfo: {
            name: 'admin'
        }
    },
    effects: {

    },
    reducers: {
        changeAuth(state) {
            state.isAuth = !state.isAuth
        }
    }
}