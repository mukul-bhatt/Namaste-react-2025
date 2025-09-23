

function cartReducer(currState, action) {
  if(action.type === "decrease"){
    return currState - 1;
  }else if(action.type === "increase"){
    return currState + 1;  
  }
}
  
export default cartReducer;