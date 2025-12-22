import najahIcon from "../assets/Uni-Photos/najah-icon.jpeg";
import openIcon from "../assets/Uni-Photos/alkds-icon.jpeg";
import berzit from "../assets/Uni-Photos/berzit-icon.jpeg";
import amercina from "../assets/Uni-Photos/americna-icon.jpeg";
import ScrollToTop from '../components/ScroolToTop.tsx'
export default function University() {
  return (
   <div className="uni-page">
     <section>
      <div className="page-header">
        <h1>الجامعات الفلسطينية</h1>
        <p>تعرف على الجامعات الفلسطينية والبرامج الدراسية التي تقدمها</p>
      </div>

      <div className="universities-grid">
        <div className="university-card">
          <div className="university-header">
            <a
              href="https://www.facebook.com/ANajahUni?locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img  className = "najah" src={najahIcon} />
            </a>

            <h3>جامعة النجاح الوطنية</h3>
            <p>نابلس، فلسطين</p>
          </div>
          <div className="university-body">
            <div className="university-detail">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>الموقع:</strong> نابلس، مع فروع في طولكرم ورام الله
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <strong>البرامج البارزة:</strong> الطب، الهندسة، الصيدلة،
                تكنولوجيا المعلومات، الآداب
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-star"></i>
              <div>
                <strong>المميزات:</strong> أكبر جامعة فلسطينية، اعتمادات دولية،
                مراكز بحثية متطورة
              </div>
            </div>
          </div>
        </div>

        <div className="university-card">
          <div className="university-header">
            <a
              href="https://www.facebook.com/QouChannel?locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
            > 
              <img src={openIcon} className="kds"/>
            </a>

            <h3>جامعة القدس المفتوحة</h3>
            <p>رام الله، فلسطين</p>
          </div>
          <div className="university-body">
            <div className="university-detail">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>الموقع:</strong> رام الله، مع فروع في جميع المحافظات
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <strong>البرامج البارزة:</strong> التعليم المفتوح، الإدارة،
                التكنولوجيا، العلوم الاجتماعية
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-star"></i>
              <div>
                <strong>المميزات:</strong> مرونة في الدراسة، رسوم مناسبة
              </div>
            </div>
          </div>
        </div>

        <div className="university-card">
          <div className="university-header">
            <a
              href="https://www.facebook.com/BirzeitUniversity?locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
            > 
              <img src={berzit} alt="" className = "berzet"/>
            </a>

            <h3>جامعة بيرزيت</h3>
            <p>بيرزيت، رام الله</p>
          </div>
          <div className="university-body">
            <div className="university-detail">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>الموقع:</strong> بيرزيت، رام الله
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <strong>البرامج البارزة:</strong> الهندسة، إدارة الأعمال،
                الحقوق، العلوم
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-star"></i>
              <div>
                <strong>المميزات:</strong> سمعة أكاديمية قوية، تبادل دولي
              </div>
            </div>
          </div>
        </div>

        <div className="university-card">
          <div className="university-header">
            <a
              href="https://www.facebook.com/aaup.edu?locale=ar_AR"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={amercina} alt="" className = "amerkeyh" />
            </a>

            <h3>الجامعة الأمريكية</h3>

            <p>جنين، فلسطين</p>
          </div>
          <div className="university-body">
            <div className="university-detail">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>الموقع:</strong> جنين
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-graduation-cap"></i>
              <div>
                <strong>البرامج البارزة:</strong> الهندسة، التمريض، الصيدلة،
                تكنولوجيا المعلومات
              </div>
            </div>
            <div className="university-detail">
              <i className="fas fa-star"></i>
              <div>
                <strong>المميزات:</strong> منهج أمريكي، مرافق حديثة
              </div>
            </div>
          </div>
        </div>
        
      </div>
        <ScrollToTop />
    </section>


   </div>
    
  );
}
