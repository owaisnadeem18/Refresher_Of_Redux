import {createStore} from "redux"

const initialValue = {
    amount: 2000
}

const Deposit = (state = initialValue , action ) => {
    const {type , payload} = action
    if (type === "deposit") {
        return { amount: state.amount + payload }   
    }
    return state
}

const bankStore = createStore(Deposit)

bankStore.dispatch({type: "deposit" , payload: 9000})
console.log(bankStore.getState())