import {combineReducers, createStore} from "redux"

const initialValue = {
    value : 3000
}

const bankReducer = (state = initialValue , action ) => {

    const {type , payload} = action 

    if (type == "deposit") {
        return { value: state.value + payload  }
    }
    else if (type == "withdraw") {
        return {value: state.value - payload}
    }
    else if (type == "checkBalance") {
        return {value : state.value }
    }
    return state
}

// let's create another reducer: (withdraw reducer) 

// const withdrawalReducer = (state = initialValue , action) => {
    
//     const {type , payload} = action
//     if (type == "withdraw") {
//         return {value: state.value - payload} 
//     }
//     return state
// }

// Now it's time to use the combine reducers in it: 

// const rootReducers = combineReducers({
//     deposit: depositReducer ,
//     withdraw: withdrawalReducer
// })

// const bankStore = createStore(rootReducers)

const bankStore = createStore(bankReducer)

// bankStore.dispatch({type: "deposit" , payload: 2000})
// bankStore.dispatch({type: "withdraw" , payload: 8000})
// bankStore.dispatch({type: "deposit" , payload: 1000})

bankStore.dispatch({type: "checkBalance" })

console.log(bankStore.getState())