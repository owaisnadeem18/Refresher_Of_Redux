// Refresher of Redux in this file:

import {createStore} from "redux"


const initialValue = {
    amount: 0
}

const Deposit = (state= initialValue , action) => {
    const {type , payLoad} = action
    if (type == "deposit") {
        return {amount: state.amount + payLoad}
    } 
    
    return state
}

const bankStore = createStore(Deposit)

bankStore.dispatch({type: "deposit" , payLoad: 1000})

console.log(bankStore.getState())
console.log(bankStore.getState())