export const reducer = (state, action) => {
  if (action.type === "ADD_VALUE") {
    const newPeople = [...state.people, action.newItem];
    console.log(newPeople);
    return {
      ...state,
      people: newPeople,
      isModelOpen: true,
      modelMessage: "Item is added",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModelOpen: true,
      modelMessage: "Please enter the value",
    };
  }
  if (action.type === "SET_FALSE") {
    return {
      ...state,
      isModelOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter(({ id }) => id !== action.id);
    return {
      ...state,
      people: newPeople,
      isModelOpen: "true",
      modelMessage: "Item removed",
    };
  }
};
