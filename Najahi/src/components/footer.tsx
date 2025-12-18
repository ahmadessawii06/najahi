import { useState } from "react";

interface AppProps {
  pageName: string;
}
function RenderFooter({ pageName }: AppProps) {
  const [page, setPage] = useState(pageName);

  const showPage = (page: string) => {
    setPage(page);
  };

  return (
    <footer>-
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
          src="../public/Icons/SynTag-WithoutBG.png"
          alt="SynTag Icon"
          className="syntag-logo"
        /> 
       
        </div>

        <div className="footer-section">
          <h3>روابط سريعة</h3>
          <ul className="footer-links">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("home");
                }}
              >
                الصفحة الرئيسية
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("about");
                }}
              >
                من نحن
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("donation");
                }}
              >
                التبرع بالمواد
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("search");
                }}
              >
                البحث عن الكتب
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>الصفوف الدراسية</h3>
          <ul className="footer-links">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("home");
                }}
              >
                الصف العاشر
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("home");
                }}
              >
                الصف الحادي عشر
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("home");
                }}
              >
                الصف الثاني عشر
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault(), showPage("groups");
                }}
              >
                مجموعات الدراسة
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>اتصل بنا</h3>
          <ul className="footer-links">
            <li>
              <i
                className="fas fa-map-marker-alt"
                style={{ marginLeft: 8 }}
              ></i>{" "}
              نابلس - فلسطين
            </li>
            <li>
              <i className="fas fa-phone" style={{ marginLeft: 8 }}></i>{" "}
              022956789
            </li>
            <li>
              <i className="fas fa-envelope" style={{ marginLeft: 8 }}></i>
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

            <a href="https://github.com/ahmadessawii06" target="_blank">
              <p className="ahmad-p"> Ahmad Essawii</p>
            </a>

          </nav>

               
          <nav className = "git-leen">
          <a href="https://github.com/LeenArafat" target="_blank">  
             <p className="ahmad-p"> Leen Arafat</p>
          </a> 
          </nav>

          <nav className = "git-yaqeen">
          <a href="https://github.com/yaqeenashour" target="_blank">  
             <p className="ahmad-p"> Yaqeen Ashour</p>
          </a> 
          </nav>
         
         
         <nav className = "git-jawad">
          <a href="https://github.com/jawadshahen28" target="_blank">  
             <p className="ahmad-p"> Jawad Shaheen</p>
          </a> 
         
          </nav>
        
         
       
          </div>

         


        
      
        </div>
    </footer>
  );
}

export default RenderFooter;
