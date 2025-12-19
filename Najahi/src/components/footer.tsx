
import { Link } from "react-router-dom";

function RenderFooter() {
  return (
    <footer>
      <div className="footer-container">
        
        <div className="footer-section">
          <div className="footer-logo">
            <i className="fas fa-graduation-cap"></i>
            <span>نجاحي</span>
          </div>

          <p>
            منصة تعليمية متكاملة لدعم طلاب الثانوية العامة في فلسطين. نقدم موارد
            تعليمية شاملة، مجموعات دراسة، وتوجيه أكاديمي لتحقيق النجاح.
          </p>

          <img
            src="/Icons/SynTag-WithoutBG.png"
            alt="SynTag Icon"
            className="syntag-logo"
          />
        </div>

      
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="footer-links">
            <li>
              <Link to="/main">الصفحة الرئيسية</Link>
            </li>
            <li>
              <Link to="/about">من نحن</Link>
            </li>
            <li>
              <Link to="/donation">التبرع بالمواد</Link>
            </li>
            <li>
              <Link to="/search">البحث عن الكتب</Link>
            </li>
          </ul>
        </div>

    
        <div className="footer-section">
          <h3>الصفوف الدراسية</h3>
          <ul className="footer-links">
            <li>
              <Link to="/groups">الصف العاشر</Link>
            </li>
            <li>
              <Link to="/groups">الصف الحادي عشر</Link>
            </li>
            <li>
              <Link to="/groups">الصف الثاني عشر</Link>
            </li>
            <li>
              <Link to="/groups">مجموعات الدراسة</Link>
            </li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>اتصل بنا</h3>
          <ul className="footer-links">
            <li>
              <i className="fas fa-map-marker-alt" style={{ marginLeft: 8 }} />
              نابلس - فلسطين
            </li>
            <li>
              <i className="fas fa-phone" style={{ marginLeft: 8 }} />
              022956789
            </li>
            <li>
              <i className="fas fa-envelope" style={{ marginLeft: 8 }} />
              info@najahi.edu.ps
            </li>
          </ul>
        </div>
      </div>

     
      <div className="copyright">
        <p>جميع الحقوق محفوظة لمنصة نجاحي &copy; 2026</p>
        <p>تم التطوير بواسطة فريق SynTag</p>

        <div className="social-links">
          <nav className="git-ahmad">
            <a
              href="https://github.com/ahmadessawii06"
              target="_blank"
              rel="noopener noreferrer"
            >
           
            </a>
          </nav>

          <nav className="git-leen">
            <a
              href="https://github.com/LeenArafat"
              target="_blank"
              rel="noopener noreferrer"
            >
           
            </a>
          </nav>

          <nav className="git-yaqeen">
            <a
              href="https://github.com/yaqeenashour"
              target="_blank"
              rel="noopener noreferrer"
            >
           
            </a>
          </nav>

          <nav className="git-jawad">
            <a
              href="https://github.com/jawadshahen28"
              target="_blank"
              rel="noopener noreferrer"
            >
            
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default RenderFooter;

