
import { Link } from "react-router-dom";
import facebookIcon from '../assets/Social-Icons/facebook.png'
import twitterIcon from '../assets/Social-Icons/twitter.png'
import instagramIcon from '../assets/Social-Icons/instagram.png'
import youtubeIcon from '../assets/Social-Icons/youtube.png'
import telegramIcon from '../assets/Social-Icons/telegram.png'
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
          <div className="social-links">
            <a href="http://facebook.com/" target="_blank"><i > <img src={facebookIcon} className="platform-image-in-footer" /></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i > <img src={instagramIcon} className="platform-image-in-footer" /></i></a>
            <a href="https://x.com/" target="_blank"><i > <img src={twitterIcon} className="platform-image-in-footer" /></i></a>
            <a href="https://youtube.com" target="_blank"><i > <img src={youtubeIcon} className="platform-image-in-footer" /></i></a>
            <a href="https://web.telegram.org/" target="_blank"><i > <img src={telegramIcon} className="platform-image-in-footer" /></i></a>

            
        
          </div>
         
        </div>

      
        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="footer-links">
            <li>
              <Link to="/home">الصفحة الرئيسية</Link>
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

        
      </div>
    </footer>
  );
}

export default RenderFooter;

