import "./App.css"
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="App overflow-hidden text-[#242d49] bg-[#f3f3f3] px-4 md:px-6 xl:px-[3rem] py-8">
      <div className="absolute top-[-18%] right-[0] w-[22rem] h-[22rem] rounded-[50%] bg-[#a6ddf0] blur-[72px]">ds</div>
      <div className="absolute top-[36%] left-[-8rem] w-[22rem] h-[22rem] rounded-[50%] bg-[#a6ddf0] blur-[72px]">ds</div>

      {/* <Home/> */}
      <Profile/>
    </div>
  );
}

export default App;
