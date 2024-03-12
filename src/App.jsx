import React from "react";
import Background from "./component/Background";
import Foreground from "./component/Foreground";
import { UserProvider, useUser } from "./lib/context/user";
import { Login } from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import IdeaPage from "./pages/ideasPage";
import Doc from "./pages/Doc";
import Loader from "./component/Loader";
import { useDocs } from "./lib/context/docs";
function App() {
  const isLoginPage = window.location.pathname === "/login";
  const user = useUser();
  const docs = useDocs();

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {(user.authLoading || docs.docLoading) && <Loader />}
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/doc:id" element={<Doc />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ideas" element={<IdeaPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
