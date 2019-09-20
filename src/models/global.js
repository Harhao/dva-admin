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
        setAuth(state,action) {
           return {
               ...state,
               isAuth: !state.isAuth
           }
        }
    }
}