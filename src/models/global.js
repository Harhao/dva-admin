export default {
    namespace: 'global',
    state: {
        isAuth: false,
        userInfo: {
            name: 'admin'
        }
    },
    effects: {

    },
    reducers: {
        setAuth(state,action) {
           return {
               ...state,
               isAuth: !state.isAuth
           }
        }
    }
}