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
            <li> <NavLink to="/login">تسجيل الدخول</NavLink>  </li>
            <li> <NavLink to="/home">الصفحة الرئيسية</NavLink> </li> {/*This shoud be home, not main */}
            <li> <NavLink to="/about">من نحن</NavLink> </li>
            <li> <NavLink to="/donation">التبرع بالمواد</NavLink> </li>
            <li> <NavLink to="/search">البحث عن الكتب</NavLink>  </li>
            <li> <NavLink to="/uni">الجامعات الفلسطينية</NavLink> </li>
            <li> <NavLink to="/groups">مجموعات الدراسة</NavLink> </li>
            <li> <NavLink to="/teachers">المعلمون القريبون</NavLink> </li>
            <li>
              <NavLink to="/syntag" className="syntag"> 
                <span className="Syn">Syn</span>
                <span className="Tag">Tag</span>
            
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;