import { HashRouter as Router,Routes, Route, Navigate } from "react-router-dom";
import RenderFooter from "./components/footer";
import Header from "./components/header";
import Donation from "./pages/Donation";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";
import University from "./pages/Uni";
import Groups from "./pages/Groups";
import Teacher from "./pages/Teacher";
import SynTag from "./pages/SynTag";
import SubHomePage from "./pages/subHomePage";
function App() {
  return (
    <>
        <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<Home />}>
           <Route path=":grade/:track?/:materialName" element={<SubHomePage />} > </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/uni" element={<University />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/teachers" element={<Teacher />}></Route>
        <Route path="/syntag" element={<SynTag />}></Route>
      </Routes>

      <RenderFooter />
      </Router>
    </>
  );
}

export default App;