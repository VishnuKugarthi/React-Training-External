let initialState=[];

function productsReducer(currentState=initialState, action){
    if(action.type==='ADD_NEW'){
        const newState=[...currentState, action];
        return newState;
    }
}