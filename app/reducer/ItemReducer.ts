interface State {
    itemQty: number,
    totalAmount: number
}

type Action =  
  | {type: "ADD_ITEM"; itemQty: number; totalAmount: number; }
  | {type: "REDUCE_ITEM"; itemQty: number; totalAmount: number; }


export default (state: State, action: Action) => {
    console.log(state.itemQty + action.itemQty, action.type, state.totalAmount + action.totalAmount)
    switch(action.type) {
        case "ADD_ITEM": 
            return {
                ...state,
                itemQty: state.itemQty + action.itemQty, 
                totalAmount: state.totalAmount + action.totalAmount
            }

        case "REDUCE_ITEM": 
            return {
                ...state,
                itemQty: state.itemQty - action.itemQty, 
                totalAmount: state.totalAmount - action.totalAmount
            }    
    }
}