import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-4/5 mx-auto">
      <Header></Header>

      <div className="grid grid-cols-3 gap-6">
        <Blogs></Blogs>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
