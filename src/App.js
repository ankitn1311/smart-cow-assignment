import "./App.scss";
// import { Provider, useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Video from "./components/video/Video";
import SavedVideos from "./components/saved-videos/SavedVideos";
import Account from "./components/account/Account";
import Header from "./components/layouts/header/Header";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
// import { SET_CURR_USER } from "./actions/actionTypes";

function App() {
  // const auth = useSelector((state) => state.auth); const dispatch = useDispatch();
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Video />}></Route>
          <Route path="/saved-videos" element={<SavedVideos />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="*" element={<div>404 error</div>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
