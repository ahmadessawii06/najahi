import { useState } from "react";
import Login from '../pages/Login'

interface AppProps {
  pageName: string;
}
function Header({ pageName }: AppProps) {
  const [page, setPage] = useState(pageName);

  const showPage = (page: string) => { setPage(page); };

  return (
    <>
      <header>
        <div className="header-container">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); showPage('home'); }}>
            <i className="fas fa-graduation-cap"></i>
            <span>نجاحي</span>
          </a>

          <button className="nav-toggle" id="navToggle">
            <i className="fas fa-bars"></i>
          </button>

          <nav>
            <ul className="nav-links" id="navLinks">
              <li>
                <a href="#" className="nav-link active" onClick={(e) => { e.preventDefault(); showPage('login'); }} >تسجيل الدخول</a>
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('home'); }} >الصفحة الرئيسية</a >
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('about'); }} >من نحن</a >
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('donation'); }} >التبرع بالمواد</a >
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('search'); }} >البحث عن الكتب</a>
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('universities'); }}>الجامعات الفلسطينية</a>
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('groups'); }}>مجموعات الدراسة</a>
              </li>
              <li>
                <a href="#" className="nav-link" onClick={(e) => { e.preventDefault(); showPage('teachers'); }}>المعلمون القريبون</a >
              </li>
            </ul>
          </nav>
        </div>
      </header>


      {/*fix this*/}
      <div className="page-content">
        {page === 'home' && <h1>home</h1>}
        {page === 'login' && <h1><Login /></h1>}
        {page === 'about' && <h1>about</h1>}
        {page === 'donation' && <h1>donation</h1>}
        {page === 'search' && <h1>search</h1>}
        {page === 'universities' && <h1>universities</h1>}
        {page === 'groups' && <h1>groups</h1>}
        {page === 'teachers' && <h1>teachers</h1>}
      </div>
    </>
  );
}

export default Header