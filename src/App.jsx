import { Routes, Route, useLocation } from "react-router-dom";

// component for the app
import Header from "./components/common/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Posts from "./components/post/Posts";
import Books from "./components/book/Books";
import Profile from "./components/profile/Profile";

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
        <Route path="/books" element={<Books />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
