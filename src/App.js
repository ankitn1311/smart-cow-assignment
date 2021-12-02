import "./App.scss";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import Video from "./components/video/Video";
import SavedVideos from "./components/saved-videos/SavedVideos";
import Account from "./components/account/Account";
import Header from "./components/layouts/header/Header";
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";

function RequireAuth({ children }) {
  const auth = useSelector((state) => state.auth);
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <RequireAuth>
              <Video />
            </RequireAuth>
          }></Route>
        <Route
          exact
          path="/saved-videos"
          element={
            <RequireAuth>
              <SavedVideos />
            </RequireAuth>
          }></Route>
        <Route exact path="/login" element={<Login />}></Route>

        <Route exact path="/sign-up" element={<SignUp />}></Route>
        <Route
          exact
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }></Route>
        <Route path="*" element={<div>404 error</div>}></Route>
      </Routes>

      <Header />
    </div>
  );
}

export default App;
