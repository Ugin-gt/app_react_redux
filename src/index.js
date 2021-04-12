import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

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
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
