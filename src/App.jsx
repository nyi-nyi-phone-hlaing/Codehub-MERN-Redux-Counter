import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <div className='w-full h-screen bg-indigo-600 flex flex-col items-center justify-center'>
      <Navbar />
      {isLogin && <Counter />}
      {!isLogin && <Login />}
    </div>
  );
}

export default App;
