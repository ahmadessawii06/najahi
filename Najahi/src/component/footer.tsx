import {useState}  from 'react'


interface AppProps {
  pageName: string;
}
function RenderFooter ({ pageName }: AppProps) {
    
  const [page, setPage] = useState(pageName);

  const showPage = (page: string) => { setPage(page); };

return(
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
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={(e)=>{e.preventDefault(), showPage('home')}}>الصفحة الرئيسية</a></li>
            <li><a href="#" onClick={(e)=> {e.preventDefault() , showPage('about')}}>من نحن</a></li>
            <li>
              <a href="#" onClick={(e)=> {e.preventDefault() , showPage('donation')}}>التبرع بالمواد</a>
            </li>
            <li><a href="#" onClick={(e)=> {e.preventDefault() , showPage('search')}}>البحث عن الكتب</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>الصفوف الدراسية</h3>
          <ul className="footer-links">
            <li><a href="#" onClick={(e)=> {e.preventDefault() , showPage('home')}}>الصف العاشر</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault() , showPage('home')}}>الصف الحادي عشر</a></li>
            <li><a href="#" onClick={(e) => {e.preventDefault() ,  showPage('home')}}>الصف الثاني عشر</a></li>
            <li>
              <a href="#" onClick={(e) => {e.preventDefault() ,showPage('groups')}}>مجموعات الدراسة</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>اتصل بنا</h3>
          <ul className="footer-links">
            <li>
              <i className="fas fa-map-marker-alt" style={{marginLeft: 8}}></i> رام
              الله، فلسطين
            </li>
            <li>
              <i className="fas fa-phone" style={{marginLeft: 8}}></i> 022956789
            </li>
            <li>
              <i className="fas fa-envelope" style={{marginLeft: 8}}></i>
              info@najahi.edu.ps
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>
          جميع الحقوق محفوظة © 2023 منصة نجاحي. تم التطوير بواسطة فريق SynTag
        </p>
      </div>
    </footer>)

}

export default RenderFooter