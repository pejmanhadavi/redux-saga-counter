import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './store/store';
import * as actions from './store/actions';

const App = () => {
  const counterStates: any = useSelector((state: RootState) => state.counter);
  const { counter } = counterStates;
  const dispatch = useDispatch();
  const counterInput: any = createRef<HTMLInputElement>();

  const setCounterOnClick = () => {
    const counterValue = counterInput.current.value;
    dispatch(actions.setCounter(counterValue));
  };

  const countDownOnClick = () => {
    dispatch(actions.counterStart());
  };

  return (
    <>
      <h2>simple counter</h2>
      <input ref={counterInput} placeholder='set counter value' type='number' />
      <button style={{
        margin: '10px'
      }}
        onClick={setCounterOnClick}
      >
        Set
      </button>
      <br />
      <p style={{
        margin: '10px'
      }}>
        {counter}
      </p>
      <button onClick={countDownOnClick}>count</button>
    </>
  );
}

export default App;
