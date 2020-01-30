const initialState = {
  title: "Counter",
  count: 0,
  operation: "Start now"
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
        operation: action.operation
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
        operation: action.operation
      };
    default:
      return state;
  }
};

export default Reducer;
