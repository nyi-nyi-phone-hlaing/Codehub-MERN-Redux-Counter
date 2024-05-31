import { useDispatch } from "react-redux";
import { authActions } from "../store/authReducer";

const Login = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authActions.login());
  };
  return (
    <div className='bg-white w-2/5 p-2 rounded-md shadow-lg flex items-center justify-center'>
      <button
        onClick={loginHandler}
        className='px-2 py-0.5 bg-indigo-600 text-white rounded-md shadow-md active:bg-indigo-700'>
        Login to Redux Counter
      </button>
    </div>
  );
};

export default Login;
