import { Routes, Route, useLocation } from "react-router-dom";

// component for the app
import Header from "./components/common/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Posts from "./components/post/Posts";

const App = () => {

  // get the current location
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="App">
      {/* conditionally rander components based on current location (path) */}
      {pathname === "/" || pathname === "/register" ? null :
        <Header />
      }

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
