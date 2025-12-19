import { Link, Outlet, useLocation } from "react-router-dom"

function Home() {
  const location = useLocation();
  const showOnlyOutlet = location.pathname.split("/").length > 2;

  if (showOnlyOutlet) {
    return <Outlet />;
  }

  return (
    <>
      <div className="page-header">
        <h1>الصفحة الرئيسية</h1>
        <p>اختر صفك الدراسي للوصول إلى المواد والموارد التعليمية المناسبة</p>
      </div>
      <div className="levels-container">
        {/* Level 10 */}
        <div className="level level-10">
          <div className="level-header">
            <h2>الصف العاشر - المسار الأكاديمي</h2>
            <p>المواد الدراسية للصف العاشر - المسار الأكاديمي</p>
          </div>

          <div className="boxes-container">
            <div className="box">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fas fa-book-open"></i>
                </div>
                <h3 className="box-title">المواد الدراسية</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item">  <Link to="/home/10/فيزياء"> فيزياء  </Link> </li>
                <li className="subject-item">  <Link to="/home/10/كيمياء"> كيمياء  </Link> </li>
                <li className="subject-item">  <Link to="/home/10/احياء"> أحياء </Link> </li>
                <li className="subject-item">  <Link to="/home/10/رياضيات">رياضيات</Link></li>
                <li className="subject-item">  <Link to="/home/10/اللغة-الانجليزية">انجليزي</Link></li>
                <li className="subject-item">  <Link to="/home/10/دين">التربية-الاسلامية</Link></li>
                <li className="subject-item">  <Link to="/home/10/الدراسات-الفلسطينية">الدراسات الفلسطينية</Link></li>
                <li className="subject-item">  <Link to="/home/10/اللغة-العربية">عربي</Link></li>
                <li className="subject-item">  <Link to="/home/10/تكنولوجيا">تكنولوجيا-المعلومات</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Level 11 - Updated */}
        <div className="level level-11">
          <div className="level-header">
            <h2>الصف الحادي عشر</h2>
            <p>اختر الفرع التعليمي المناسب لك</p>
          </div>

          <div className="boxes-container">
            {/*الصناعي */}
            <div className="box industrial">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <h3 className="box-title">الصناعي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/11/صناعي/فيزياء">الفيزياء</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/الرياضيات">الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/اللغة-العربية">اللغة العربية</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/التربية-الاسلامية">التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/تكنولوجيا-المعلومات">تكنولوجيا المعلومات</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/اللغة-الانجليزية">انجليزي</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/الرسم-الصناعي">رسم صناعي</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/علم-الصناعة">علم صناعة</Link></li>
              </ul>
            </div>

            {/* العلمي */}
            <div className="box scientific">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <h3 className="box-title">العلمي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/11/علمي/الفيزياء">الفيزياء</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/الكيمياء">الكيمياء</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/الاحياء">الأحياء</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/الرياضيات">الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/التربية-الاسلامية">التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/اللغة-العربية">اللغة العربية</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/تكنولوجيا-المعلومات">تكنولوجيا المعلومات</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/اللغة-الانجليزية">اللغة الإنجليزية</Link></li>

              </ul>
            </div>

            {/* الأدبي*/}
            <div className="box literary">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fas fa-pen-fancy"></i>
                </div>
                <h3 className="box-title">الأدبي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/11/ادبي/التربية-الاسلامية">التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/الجغرافيا">الجغرافيا</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/التاريخ">التاريخ</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/الرياضيات">الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-العربية-الاداب">عربي أدب</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-الانجليزية-الاداب">انجليزي أدب</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/تكنولوجيا-المعلومات">التكنولوجيا</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/الثقافة-العلمية">الثقافة العلمية</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-العربية">عربي</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-الانجليزية">انجليزي</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Level 12 - Updated */}
        <div className="level level-12">
          <div className="level-header">
            <h2>الصف الثاني عشر</h2>
            <p>اختر الفرع التعليمي المناسب لك</p>
          </div>

          <div className="boxes-container">
            {/* الصناعي */}
            <div className="box industrial">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fas fa-industry"></i>
                </div>
                <h3 className="box-title">الصناعي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/12/صناعي/الفيزياء">الفيزياء</Link></li>
                <li className="subject-item"><Link to="/home/12/صناعي/الرياضيات">الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/12/صناعي/اللغة-العربية">اللغة العربية</Link></li>
                <li className="subject-item"><Link to="/home/12/صناعي/التربية-الاسلامية">التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/12/صناعي/تكنولوجيا-المعلومات">تكنولوجيا المعلومات</Link></li>
                <li className="subject-item"><Link to="/home/12/صناعي/اللغة-الانجليزية">انجليزي</Link></li>
                <li className="subject-item"><Link to="/home/12/صناعي/رسم-صناعي">رسم صناعي</Link></li>
                <li className="subject-item"><Link to="/home/12/صناعي/علم-صناعة">علم صناعة</Link></li>
              </ul>
            </div>

            {/* العلمي */}
            <div className="box scientific">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fas fa-flask"></i>
                </div>
                <h3 className="box-title">العلمي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/12/علمي/الفيزياء">الفيزياء</Link></li>
                <li className="subject-item"><Link to="/home/12/علمي/الكيمياء">الكيمياء</Link></li>
                <li className="subject-item"><Link to="/home/12/علمي/الاحياء">الأحياء</Link></li>
                <li className="subject-item"><Link to="/home/12/علمي/الرياضيات">الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/12/علمي/التربية-الاسلامية">التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/12/علمي/اللغة-العربية">اللغة العربية</Link></li>
                <li className="subject-item"><Link to="/home/12/علمي/تكنولوجيا-المعلومات">تكنولوجيا المعلومات</Link></li>
                <li className="subject-item"><Link to="/home/12/علمي/اللغة-الانجليزية">اللغة الإنجليزية</Link></li>
              </ul>
            </div>

            {/* الأدبي */}
            <div className="box literary">
              <div className="box-header">
                <div className="box-icon">
                  <i className="fas fa-pen-fancy"></i>
                </div>
                <h3 className="box-title">الأدبي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/12/ادبي/التربية-الاسلامية">التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/الجغرافيا">الجغرافيا</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/التاريخ">التاريخ</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/الرياضيات">الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/عربي-ادب">عربي أدب</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/انجليزي-ادب">انجليزي أدب</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/التكنولوجيا">التكنولوجيا</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/الثقافة-العلمية">الثقافة العلمية</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/عربي">عربي</Link></li>
                <li className="subject-item"><Link to="/home/12/ادبي/انجليزي">انجليزي</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home