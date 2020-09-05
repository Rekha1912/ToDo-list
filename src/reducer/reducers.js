const reducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [...state, action.item];
      case "DELETE_ITEM":
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ];
      case "EDIT_ITEM":
        return [
          ...state.slice(0, action.index), // everything before current item
          {
            ...state[action.index],
             name: action.value
          },
          ...state.slice(action.index + 1), // everything after current item
       ];
       case "COMPLETE_ITEM":
        return [
          ...state.slice(0, action.index), // everything before current item
          {
            ...state[action.index],
             completed: action.value
          },
          ...state.slice(action.index + 1), // everything after current item
       ];
       case "DELETE_ITEMS":
          for (var i = action.arr.length -1; i >= 0; i--){
            state.splice(action.arr[i],1);
          }
         return [
           ...state
         ];
      default:
        return state;
    }
  };

  export default reducer;