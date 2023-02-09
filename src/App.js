import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <>
      <div className="bg-mefour backimage">
        {/* <Login /> */}

        {/* <Register /> */}

        <div className="container mx-auto shadow-lg rounded-lg">
          <Navbar />
          <div className="flex flex-row justify-between">
            <Sidebar />
            <Chat />
            <RightBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
