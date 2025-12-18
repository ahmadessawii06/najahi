// import { useState } from "react";
// import Login from '../pages/Login'
// import Donation from "../pages/Donation";
// interface AppProps {
//   pageName: string;
// }
// function Header({ pageName }: AppProps) {
//   const [page, setPage] = useState(pageName);

//   const showPage = (page: string) => { setPage(page); };

//   return (
//     <>
//       <header>
//         <div className="header-container">
//           <a href="#" className="logo" onClick={(e) => { e.preventDefault(); showPage('home'); }}>
//             <i className="fas fa-graduation-cap"></i>
//             <span>نجاحي</span>
//           </a>

//           <button className="nav-toggle" id="navToggle">
//             <i className="fas fa-bars"></i>
//           </button>

//           <nav>
//             <ul className="nav-links" id="navLinks">
//               <li>
//                 <a href="#" className="nav-link active" onClick={(e) => { e.preventDefault(); showPage('login'); }} >تسجيل الدخول</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('home'); }} >الصفحة الرئيسية</a >
//               </li>
//               <li>
//                 <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('about'); }} >من نحن</a >
//               </li>
//               <li>
//                 <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('donation'); }} >التبرع بالمواد</a >
//               </li>
//               <li>
//                 <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('search'); }} >البحث عن الكتب</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('universities'); }}>الجامعات الفلسطينية</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('groups'); }}>مجموعات الدراسة</a>
//               </li>
//               <li>
//                 <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('teachers'); }}>المعلمون القريبون</a >
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>


//       {/*fix this*/}
//       <div className="page-content">
//         {page === 'home' && <h1>home</h1>}
//         {page === 'login' && <Login />}
//         {page === 'about' && <h1>about</h1>}
//         {page === 'donation' && <Donation />}
//         {page === 'search' && <h1>search</h1>}
//         {page === 'universities' && <h1>universities</h1>}
//         {page === 'groups' && <h1>groups</h1>}
//         {page === 'teachers' && <h1>teachers</h1>}
//       </div>
//     </>
//   );
// }

// export default Header


// import { Link, NavLink } from 'react-router-dom'
// import Donation from '../pages/Donation'
// function Header() {
//   return (
//     <header>
//       <div className="header-container">
//         <Link to="/" className="logo">
//           <i className="fas fa-graduation-cap"></i>
//           <span>نجاحي</span>
//         </Link>

//         <nav>
//           <ul className="nav-links">
//             <li><NavLink to="/login">تسجيل الدخول</NavLink></li>
//             <li><NavLink to="/">الصفحة الرئيسية</NavLink></li>
//             <li><NavLink to="/about">من نحن</NavLink></li>
//             <li><NavLink to="../pages/Donation">التبرع بالمواد</NavLink></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Header


import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/login" className="logo">
          <i className="fas fa-graduation-cap"></i>
          <span>نجاحي</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li><NavLink to="/login">تسجيل الدخول</NavLink></li>
            <li><NavLink to="/main">الصفحة الرئيسية</NavLink></li>
            <li><NavLink to="/about">من نحن</NavLink></li>
            <li><NavLink to="/donation">التبرع بالمواد</NavLink></li>
            <li><NavLink to="/search">البحث عن الكتب</NavLink></li>
            <li><NavLink to="/uni">الجامعات الفلسطينية</NavLink></li>
            <li><NavLink to = "/groups">مجموعات الدراسة</NavLink></li>
            <li><NavLink to = "/teachers">المعلمون القريبون</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
