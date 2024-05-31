import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authReducer";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <nav className='w-2/5 bg-white flex items-center justify-between p-2 mb-2 rounded-md shadow-lg'>
      <h1 className='text-center font-bold text-lg'>Redux Counter</h1>

      {isLogin && (
        <ul className='flex items-center gap-3'>
          <li className='text-base font-medium duration-200 hover:underline hover:text-indigo-700'>
            My Score{" "}
          </li>
          <li className='text-base font-medium duration-200 hover:underline hover:text-indigo-700'>
            Profile
          </li>
          <li>
            <button
              onClick={logoutHandler}
              className='px-2 py-0.5 bg-indigo-600 text-white rounded-md shadow-md active:bg-indigo-700'>
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
