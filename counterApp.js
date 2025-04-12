import {createStore} from "redux"

const counter = {
    value: 0
}

const counterReducer = (state= counter , {type}) => {
    switch(type) {
        case "inc": 
            return { value: state.value + 1 }
        case "dec":
            return { value: state.value - 1 }
    }
    return state
}

const CounterApp = createStore(counterReducer)

CounterApp.dispatch({type: "inc"})
CounterApp.dispatch({type: "inc"})
CounterApp.dispatch({type: "dec"})
CounterApp.dispatch({type: "dec"})

console.log(CounterApp.getState())