const initialState = {
  count: 0,
  step: 1,
};

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'DECREMENT': {
      const { count, step } = state;
      return {
        ...state,
        count: count - step,
      };
    }
    case 'INCREMENT': {
      const { count, step } = state;
      return {
        ...state,
        count: count + step,
      };
    }
    case 'SET_STEP': {
      const { newStep } = action;
      return {
        ...state,
        step: newStep,
      };
    }
    default:
      return state;
  }
}

export default reducer;