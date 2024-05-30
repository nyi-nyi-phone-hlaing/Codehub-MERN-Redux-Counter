import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const isShow = useSelector((state) => state.isShow);
  const dispatch = useDispatch();
  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };
  const increaseBy5Handler = () => {
    dispatch(counterActions.increaseBy5(5));
  };

  const toggleHandler = () => {
    dispatch(counterActions.toggle());
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
