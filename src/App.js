import { connect } from 'react-redux';
import * as ActionCreators from './actions';

function App (props) {
  const { step, count, dispatch } = props;
  const decrement = () => {
    const action = ActionCreators.decrement();
    dispatch(action);
  };
  const increment = () => {
    const action = ActionCreators.increment();
    dispatch(action);
  };
  const onChange = event => {
    const value = Number(event.target.value);
    const action = ActionCreators.setStep(value);
    dispatch(action);
  };
  return (
    <div>
      <h1>Current counter value: {count} </h1>
      <input type='number' value={step} onChange={onChange} />
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
function mapStateToProps (state) {
  return state;
}

// const withState = connect(mapStateToProps);

// const componentWithState = withState(App);

// export default componentWithState;

export default connect(mapStateToProps)(App);
