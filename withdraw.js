import { createStore } from "redux";


const initialValue = {
    amount: 3000
}

// let me create a reducer of withdraw money 

const withdrawMoney = (state = initialValue , action) => {
    const {type , payload} = action

    if (type == "withdraw") {
        if (state.amount < payload) {
            console.error("You don't have that much enough cash")
        }
        else {
            return { amount: state.amount - payload }    
        }
    }

    return state 
}

const bankStore = createStore(withdrawMoney)
bankStore.dispatch({type: "withdraw" , payload: 1000})
bankStore.dispatch({type: "withdraw" , payload: 1000})
bankStore.dispatch({type: "withdraw" , payload: 1000})
console.log(bankStore.getState())