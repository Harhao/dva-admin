// import service from "../../src/services/index.js"
export default {
    namespace:'login',
    state:{
    },
    effects:{
        *loginSystem({payload},{ select,call,put}){
            console.log("###",payload)
        }
    },
    reducers:{
        
    }
}