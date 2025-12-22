import { Link } from "react-router-dom";
import facebookIcon from "../assets/Social-Icons/facebook.png";
import twitterIcon from "../assets/Social-Icons/twitter.png";
import instagramIcon from "../assets/Social-Icons/instagram.png";
import youtubeIcon from "../assets/Social-Icons/youtube.png";
import telegramIcon from "../assets/Social-Icons/telegram.png";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollTo11 = () => {
  window.scrollTo({
    top: 1250,
    behavior: "smooth",
  });
};

const scrollTo12 = () => {
  window.scrollTo({
    top: 2400,
    behavior: "smooth",
  });
};

function RenderFooter() {
  return (
    <footer className="footer">
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
            <a href="http://facebook.com/" target="_blank">
              <i>
                {" "}
                <img src={facebookIcon} className="platform-image-in-footer" />
              </i>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <i>
                {" "}
                <img src={instagramIcon} className="platform-image-in-footer" />
              </i>
            </a>
            <a href="https://x.com/" target="_blank">
              <i>
                {" "}
                <img src={twitterIcon} className="platform-image-in-footer" />
              </i>
            </a>
            <a href="https://youtube.com" target="_blank">
              <i>
                {" "}
                <img src={youtubeIcon} className="platform-image-in-footer" />
              </i>
            </a>
            <a href="https://web.telegram.org/" target="_blank">
              <i>
                {" "}
                <img src={telegramIcon} className="platform-image-in-footer" />
              </i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="footer-links">
            <li>
              <Link to="/home" onClick={scrollToTop}>
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={scrollToTop}>
                من نحن
              </Link>
            </li>
            <li>
              <Link to="/donation" onClick={scrollToTop}>
                التبرع بالمواد
              </Link>
            </li>
            <li>
              <Link to="/search" onClick={scrollToTop}>
                البحث عن الكتب
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>الصفوف الدراسية</h3>
          <ul className="footer-links">
            <li>
              <Link to="/home" onClick={scrollToTop}>
                الصف العاشر
              </Link>
            </li>
            <li>
              <Link to="/home" onClick={scrollTo11}>
                الصف الحادي عشر
              </Link>
            </li>
            <li>
              <Link to="/home" onClick={scrollTo12}>
                الصف الثاني عشر
              </Link>
            </li>
            <li>
              <Link to="/groups" onClick={scrollToTop}>
                مجموعات الدراسة
              </Link>
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
            <li className="fas fa-team" style={{ marginLeft: 8 }}>
              <Link to="/syntag" onClick={scrollToTop}>
                فريق SynTag
              </Link>
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
