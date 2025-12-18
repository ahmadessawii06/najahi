import { Routes, Route } from "react-router-dom";
import RenderFooter from "./components/footer";
import Header from "./components/header";
import Donation from "./pages/Donation";
import Login from "./pages/Login";
import Main from "./pages/Main";
import About from "./pages/About";
import Search from "./pages/Search";
import University from "./pages/Uni";
import Groups from "./pages/Groups";
import Teacher from "./pages/Teacher";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/uni" element={<University />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/teachers" element={<Teacher />}></Route>
      </Routes>

      <RenderFooter pageName="login" />
    </>
  );
}

export default App;