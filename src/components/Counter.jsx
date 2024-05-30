import { useDispatch, useSelector } from "react-redux";
import ACTIONS from "../utils/actions";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const isShow = useSelector((state) => state.isShow);
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch({ type: ACTIONS.INCREASE });
  };
  const decreaseHandler = () => {
    dispatch({ type: ACTIONS.DEFREASE });
  };
  const increaseBy5Handler = () => {
    dispatch({ type: ACTIONS.INCREASE_BY_5, amount: 5 });
  };

  const toggleHandler = () => {
    dispatch({ type: ACTIONS.TOGGLE });
  };

  return (
    <section className='p-2 bg-white rounded-md shadow-lg'>
      <h1 className='text-center mb-2 font-bold text-lg'>Redux Counter</h1>
      {isShow && <h3 className='text-center font-bold text-2xl'>{counter}</h3>}
      <div className='flex items-center justify-center gap-2 mt-3 '>
        {isShow && (
          <>
            <button
              onClick={increaseHandler}
              className='px-2 py-0.5 bg-indigo-600 text-white rounded-md shadow-md active:bg-indigo-700'>
              Increase
            </button>
            <button
              onClick={decreaseHandler}
              className='px-2 py-0.5 bg-indigo-600 text-white rounded-md shadow-md active:bg-indigo-700'>
              Decrease
            </button>
            <button
              onClick={increaseBy5Handler}
              className='px-2 py-0.5 bg-indigo-600 text-white rounded-md shadow-md active:bg-indigo-700'>
              Increase by 5
            </button>
          </>
        )}
        <button
          onClick={toggleHandler}
          className='px-2 py-0.5 bg-indigo-600 text-white rounded-md shadow-md active:bg-indigo-700'>
          Toggle Counter
        </button>
      </div>
    </section>
  );
};

export default Counter;
