
export const addItem = (name) => {
    return {
      type: "ADD_ITEM",
      item: {
        name: name,
        completed: false
      }
    };
  };
  
export const deleteItem = index => {
    return {
      type: "DELETE_ITEM",
      index: index
    };
  };

  export const editItem = (index, val) => {
    return {
      type: "EDIT_ITEM",
      index: index,
      value: val
    };
  };

  export const completeItem = (index, val) => {
    return {
      type: "COMPLETE_ITEM",
      index: index,
      value: val
    };
  };

  export const deleteItems = index => {
    return {
      type: "DELETE_ITEMS",
      arr: index
    };
  };
