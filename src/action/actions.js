
export const addItem = (name) => {
    return {
      type: "ADD_ITEM",
      item: {
        name: name
      }
    };
  };
  
export const deleteItem = index => {
    return {
      type: "DELETE_ITEM",
      index: index
    };
  };

