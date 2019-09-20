export default {
    namespace:'global',
    state:{
        isAuth: true,
    },
    effects:{

    },
    reducers:{
        changeAuth(state){
            state.isAuth = !state.isAuth
        }
    }
}