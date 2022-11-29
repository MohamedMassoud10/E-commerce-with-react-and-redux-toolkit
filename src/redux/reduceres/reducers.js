let INIT_State={
    carts:[]
};

export const cartreducer=(state = INIT_State,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
        return {
            ...state,
            carts:[...state.carts,action.payload]
        }
        default :
        return state
    }
}