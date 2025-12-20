
import { Link, Outlet, useLocation } from "react-router-dom";

// سمايلات لكل مادة
const subjectIcons: Record<string, string> = {
  فيزياء: "⚛️",
  الكيمياء: "🧪",
  احياء: "🧬",
  الرياضيات: "➗",
  "اللغة-الانجليزية": "🇬🇧",
  دين: "🕌",
  "الدراسات-الفلسطينية": "🗺️",
  "اللغة-العربية": "📘",
  "تكنولوجيا-المعلومات": "💻",
  "الرسم-الصناعي": "📐",
  "علم-الصناعة": "🏭",
  الجغرافيا: "🌍",
  التاريخ: "🏺",
  "اللغة-العربية-الاداب": "✒️",
  "اللغة-الانجليزية-الاداب": "📖",
  "الثقافة-العلمية": "🔬",
};

// سمايلات للفروع
const branchIcons: Record<string, string> = {
  الصناعي: "🏭",
  العلمي: "🔬",
  الأدبي: "✏️",
};

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
                <div className="box-icon" style={{ fontSize: "2rem" }}>📚</div>
                <h3 className="box-title">المواد الدراسية</h3>
              </div>

              <ul className="subjects-list">
                <Link to="/home/10/فيزياء"><li className="subject-item">{subjectIcons["فيزياء"]} فيزياء</li></Link>
                <Link to="/home/10/كيمياء"><li className="subject-item">{subjectIcons["الكيمياء"] || "🧪"} كيمياء</li></Link>
                <Link to="/home/10/احياء"><li className="subject-item">{subjectIcons["احياء"]} أحياء</li></Link>
                <Link to="/home/10/رياضيات"><li className="subject-item">{subjectIcons["الرياضيات"]} رياضيات</li></Link>
                <Link to="/home/10/اللغة-الانجليزية"><li className="subject-item">{subjectIcons["اللغة-الانجليزية"]} انجليزي</li></Link>
                <Link to="/home/10/دين"><li className="subject-item">{subjectIcons["دين"]} التربية-الاسلامية</li></Link>
                <Link to="/home/10/الدراسات-الفلسطينية"><li className="subject-item">{subjectIcons["الدراسات-الفلسطينية"]} الدراسات الفلسطينية</li></Link>
                <Link to="/home/10/اللغة-العربية"><li className="subject-item">{subjectIcons["اللغة-العربية"]} عربي</li></Link>
                <Link to="/home/10/تكنولوجيا"><li className="subject-item">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا-المعلومات</li></Link>
              </ul>
            </div>
          </div>
        </div>

        {/* Level 11 */}
        <div className="level level-11">
          <div className="level-header">
            <h2>الصف الحادي عشر</h2>
            <p>اختر الفرع التعليمي المناسب لك</p>
          </div>

          <div className="boxes-container">
            {/* الصناعي */}
            <div className="box industrial">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["الصناعي"]}</div>
                <h3 className="box-title">الصناعي</h3>
              </div>

              <ul className="subjects-list">
                <Link to="/home/11/صناعي/فيزياء"><li className="subject-item">{subjectIcons["فيزياء"]} الفيزياء</li></Link>
                <Link to="/home/11/صناعي/الرياضيات"><li className="subject-item">{subjectIcons["الرياضيات"]} الرياضيات</li></Link>
                <Link to="/home/11/صناعي/اللغة-العربية"><li className="subject-item">{subjectIcons["اللغة-العربية"]} اللغة العربية</li></Link>
                <Link to="/home/11/صناعي/التربية-الاسلامية"><li className="subject-item">{subjectIcons["دين"]} التربية الإسلامية</li></Link>
                <Link to="/home/11/صناعي/تكنولوجيا-المعلومات"><li className="subject-item">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا المعلومات</li></Link>
                <Link to="/home/11/صناعي/اللغة-الانجليزية"><li className="subject-item">{subjectIcons["اللغة-الانجليزية"]} انجليزي</li></Link>
                <Link to="/home/11/صناعي/الرسم-الصناعي"><li className="subject-item">{subjectIcons["الرسم-الصناعي"]} رسم صناعي</li></Link>
                <Link to="/home/11/صناعي/علم-الصناعة"><li className="subject-item">{subjectIcons["علم-الصناعة"]} علم صناعة</li></Link>

              </ul>
            </div>

            {/* العلمي */}
            <div className="box scientific">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["العلمي"]}</div>
                <h3 className="box-title">العلمي</h3>
              </div>

              <ul className="subjects-list">
                <Link to="/home/11/علمي/الفيزياء"><li className="subject-item">{subjectIcons["فيزياء"]} الفيزياء</li></Link>
                <Link to="/home/11/علمي/الكيمياء"><li className="subject-item">{subjectIcons["الكيمياء"]} الكيمياء</li></Link>
                <Link to="/home/11/علمي/الاحياء"><li className="subject-item">{subjectIcons["احياء"]} الأحياء</li></Link>
                <Link to="/home/11/علمي/الرياضيات"><li className="subject-item">{subjectIcons["الرياضيات"]} الرياضيات</li></Link>
                <Link to="/home/11/علمي/التربية-الاسلامية"><li className="subject-item">{subjectIcons["دين"]} التربية الإسلامية</li></Link>
                <Link to="/home/11/علمي/اللغة-العربية"><li className="subject-item">{subjectIcons["اللغة-العربية"]} اللغة العربية</li></Link>
                <Link to="/home/11/علمي/تكنولوجيا-المعلومات"><li className="subject-item">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا المعلومات</li></Link>
                <Link to="/home/11/علمي/اللغة-الانجليزية"><li className="subject-item">{subjectIcons["اللغة-الانجليزية"]} اللغة الإنجليزية</li></Link>

              </ul>
            </div>

            {/* الأدبي */}
            <div className="box literary">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["الأدبي"]}</div>
                <h3 className="box-title">الأدبي</h3>
              </div>

              <ul className="subjects-list">
                <Link to="/home/11/ادبي/التربية-الاسلامية"><li className="subject-item">{subjectIcons["دين"]} التربية الإسلامية</li></Link>
                <Link to="/home/11/ادبي/الجغرافيا"><li className="subject-item">{subjectIcons["الجغرافيا"]} الجغرافيا</li></Link>
                <Link to="/home/11/ادبي/التاريخ"><li className="subject-item">{subjectIcons["التاريخ"]} التاريخ</li></Link>
                <Link to="/home/11/ادبي/الرياضيات"><li className="subject-item">{subjectIcons["الرياضيات"]} الرياضيات</li></Link>
                <Link to="/home/11/ادبي/اللغة-العربية-الاداب"><li className="subject-item">{subjectIcons["اللغة-العربية-الاداب"]} عربي أدب</li></Link>
                <Link to="/home/11/ادبي/اللغة-الانجليزية-الاداب"><li className="subject-item">{subjectIcons["اللغة-الانجليزية-الاداب"]} انجليزي أدب</li></Link>
                <Link to="/home/11/ادبي/تكنولوجيا-المعلومات"><li className="subject-item">{subjectIcons["تكنولوجيا-المعلومات"]} التكنولوجيا</li></Link>
                <Link to="/home/11/ادبي/الثقافة-العلمية"><li className="subject-item">{subjectIcons["الثقافة-العلمية"]} الثقافة العلمية</li></Link>
                <Link to="/home/11/ادبي/اللغة-العربية"><li className="subject-item">{subjectIcons["اللغة-العربية"]} عربي</li></Link>
                <Link to="/home/11/ادبي/اللغة-الانجليزية"><li className="subject-item">{subjectIcons["اللغة-الانجليزية"]} انجليزي</li></Link>

              </ul>
            </div>
          </div>
        </div>

        {/* Level 12 */}
        <div className="level level-12">
          <div className="level-header">
            <h2> التوجيهي</h2>
            <p>اختر الفرع التعليمي المناسب لك</p>
          </div>

          <div className="boxes-container">
            {/* الصناعي */}
            <div className="box industrial">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["الصناعي"]}</div>
                <h3 className="box-title">الصناعي</h3>
              </div>

              <ul className="subjects-list">
                <Link to="/home/12/صناعي/فيزياء"><li className="subject-item">{subjectIcons["فيزياء"]} الفيزياء</li></Link>
                <Link to="/home/12/صناعي/الرياضيات"><li className="subject-item">{subjectIcons["الرياضيات"]} الرياضيات</li></Link>
                <Link to="/home/12/صناعي/اللغة-العربية"><li className="subject-item">{subjectIcons["اللغة-العربية"]} اللغة العربية</li></Link>
                <Link to="/home/12/صناعي/التربية-الاسلامية"><li className="subject-item">{subjectIcons["دين"]} التربية الإسلامية</li></Link>
                <Link to="/home/12/صناعي/تكنولوجيا-المعلومات"><li className="subject-item">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا المعلومات</li></Link>
                <Link to="/home/12/صناعي/اللغة-الانجليزية"><li className="subject-item">{subjectIcons["اللغة-الانجليزية"]} انجليزي</li></Link>
                <Link to="/home/12/صناعي/الرسم-الصناعي"><li className="subject-item">{subjectIcons["الرسم-الصناعي"]} رسم صناعي</li></Link>
                <Link to="/home/12/صناعي/علم-الصناعة"><li className="subject-item">{subjectIcons["علم-الصناعة"]} علم صناعة</li></Link>
              </ul>
            </div>

            {/* العلمي */}
            <div className="box scientific">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["العلمي"]}</div>
                <h3 className="box-title">العلمي</h3>
              </div>

              <ul className="subjects-list">
                <Link to="/home/12/علمي/الفيزياء"><li className="subject-item">{subjectIcons["فيزياء"]} الفيزياء</li></Link>
                <Link to="/home/12/علمي/الكيمياء"><li className="subject-item">{subjectIcons["الكيمياء"]} الكيمياء</li></Link>
                <Link to="/home/12/علمي/الاحياء"><li className="subject-item">{subjectIcons["احياء"]} الأحياء</li></Link>
                <Link to="/home/12/علمي/الرياضيات"><li className="subject-item">{subjectIcons["الرياضيات"]} الرياضيات</li></Link>
                <Link to="/home/12/علمي/التربية-الاسلامية"><li className="subject-item">{subjectIcons["دين"]} التربية الإسلامية</li></Link>
                <Link to="/home/12/علمي/اللغة-العربية"><li className="subject-item">{subjectIcons["اللغة-العربية"]} اللغة العربية</li></Link>
                <Link to="/home/12/علمي/تكنولوجيا-المعلومات"><li className="subject-item">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا المعلومات</li></Link>
                <Link to="/home/12/علمي/اللغة-الانجليزية"><li className="subject-item">{subjectIcons["اللغة-الانجليزية"]} اللغة الإنجليزية</li></Link>

              </ul>
            </div>

            {/* الأدبي */}
            <div className="box literary">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["الأدبي"]}</div>
                <h3 className="box-title">الأدبي</h3>
              </div>

              <ul className="subjects-list">
                <Link to="/home/12/ادبي/التربية-الاسلامية"><li className="subject-item">{subjectIcons["دين"]} التربية الإسلامية</li></Link>
                <Link to="/home/12/ادبي/الجغرافيا"><li className="subject-item">{subjectIcons["الجغرافيا"]} الجغرافيا</li></Link>
                <Link to="/home/12/ادبي/التاريخ"><li className="subject-item">{subjectIcons["التاريخ"]} التاريخ</li></Link>
                <Link to="/home/12/ادبي/الرياضيات"><li className="subject-item">{subjectIcons["الرياضيات"]} الرياضيات</li></Link>
                <Link to="/home/12/ادبي/اللغة-العربية-الاداب"><li className="subject-item">{subjectIcons["اللغة-العربية-الاداب"]} عربي أدب</li></Link>
                <Link to="/home/12/ادبي/اللغة-الانجليزية-الاداب"><li className="subject-item">{subjectIcons["اللغة-الانجليزية-الاداب"]} انجليزي أدب</li></Link>
                <Link to="/home/12/ادبي/تكنولوجيا-المعلومات"><li className="subject-item">{subjectIcons["تكنولوجيا-المعلومات"]} التكنولوجيا</li></Link>
                <Link to="/home/12/ادبي/الثقافة-العلمية"><li className="subject-item">{subjectIcons["الثقافة-العلمية"]} الثقافة العلمية</li></Link>
                <Link to="/home/12/ادبي/اللغة-العربية"><li className="subject-item">{subjectIcons["اللغة-العربية"]} عربي</li></Link>
                <Link to="/home/12/ادبي/اللغة-الانجليزية"><li className="subject-item">{subjectIcons["اللغة-الانجليزية"]} انجليزي</li></Link>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home;
