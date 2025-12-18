import "./Search.css";

export default function Search() {
  return (
    <section id="search" className="page">
      <div className="page-header">
        <h1>البحث عن الكتب والمواد التعليمية</h1>
        <p>ابحث عن الكتب والموارد التعليمية التي تحتاجها بسرعة وسهولة</p>
      </div>

      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="ابحث عن كتاب، موضوع، مؤلف..."
          />
          <button type="button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="filters">
          <button className="filter-btn active">الكل</button>
          <button className="filter-btn">رياضيات</button>
          <button className="filter-btn">علوم</button>
          <button className="filter-btn">لغة عربية</button>
          <button className="filter-btn">لغة إنجليزية</button>
          <button className="filter-btn">تاريخ</button>
          <button className="filter-btn">الصف العاشر</button>
          <button className="filter-btn">الصف الحادي عشر</button>
          <button className="filter-btn">الصف الثاني عشر</button>
        </div>

        <div className="results-grid">
          <div className="result-card">
            <div className="result-img">
              <i className="fas fa-calculator"></i>
            </div>
            <div className="result-info">
              <h4>الرياضيات للصف العاشر - الجزء الأول</h4>
              <div className="result-meta">
                وزارة التربية والتعليم الفلسطينية
              </div>
              <p>
                كتاب الرياضيات الرسمي للصف العاشر، يشمل الجبر والهندسة
                والإحصاء.
              </p>
              <a href="#" className="join-btn">
                عرض الكتاب
              </a>
            </div>
          </div>

          <div className="result-card">
            <div className="result-img">
              <i className="fas fa-flask"></i>
            </div>
            <div className="result-info">
              <h4>الكيمياء للصف الحادي عشر العلمي</h4>
              <div className="result-meta">د. محمد أبو زهرة</div>
              <p>
                كتاب شامل لمادة الكيمياء، يتضمن تجارب عملية وتمارين
                محلولة.
              </p>
              <a href="#" className="join-btn">
                عرض الكتاب
              </a>
            </div>
          </div>

          <div className="result-card">
            <div className="result-img">
              <i className="fas fa-book"></i>
            </div>
            <div className="result-info">
              <h4>الأدب الفلسطيني المعاصر</h4>
              <div className="result-meta">د. فدوى طوقان</div>
              <p>
                مختارات من الأدب الفلسطيني المعاصر للصف الثاني عشر
                الأدبي.
              </p>
              <a href="#" className="join-btn">
                عرض الكتاب
              </a>
            </div>
          </div>

          <div className="result-card">
            <div className="result-img">
              <i className="fas fa-globe-americas"></i>
            </div>
            <div className="result-info">
              <h4>تاريخ فلسطين الحديث</h4>
              <div className="result-meta">د. وليد الخالدي</div>
              <p>
                كتاب يغطي تاريخ فلسطين منذ العهد العثماني حتى الوقت
                الحاضر.
              </p>
              <a href="#" className="join-btn">
                عرض الكتاب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
