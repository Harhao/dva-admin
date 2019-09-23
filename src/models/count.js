// import service from "../../src/services/index.js"
export default {
    namespace:'count',
    state:{
        count:0
    },
    effects:{
        *loginSystem({payload},{ select,call,put}){
            console.log("###",payload)
        }
    },
    reducers:{
        
    }
}