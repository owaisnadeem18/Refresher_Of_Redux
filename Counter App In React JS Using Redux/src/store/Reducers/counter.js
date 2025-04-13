const counterValue = {
    value : 0
}

export const counterReducer = (state = counterValue , {type}) => {
    
    switch(type){
        case "inc": 
            return { value: state.value + 1}
        case "dec":
            return { value : state.value - 1 }
        default:
            return state
    }

}