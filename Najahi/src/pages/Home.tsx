
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
                <li className="subject-item"><Link to="/home/10/فيزياء">{subjectIcons["فيزياء"]} فيزياء</Link></li>
                <li className="subject-item"><Link to="/home/10/كيمياء">{subjectIcons["الكيمياء"] || "🧪"} كيمياء</Link></li>
                <li className="subject-item"><Link to="/home/10/احياء">{subjectIcons["احياء"]} أحياء</Link></li>
                <li className="subject-item"><Link to="/home/10/رياضيات">{subjectIcons["الرياضيات"]} رياضيات</Link></li>
                <li className="subject-item"><Link to="/home/10/اللغة-الانجليزية">{subjectIcons["اللغة-الانجليزية"]} انجليزي</Link></li>
                <li className="subject-item"><Link to="/home/10/دين">{subjectIcons["دين"]} التربية-الاسلامية</Link></li>
                <li className="subject-item"><Link to="/home/10/الدراسات-الفلسطينية">{subjectIcons["الدراسات-الفلسطينية"]} الدراسات الفلسطينية</Link></li>
                <li className="subject-item"><Link to="/home/10/اللغة-العربية">{subjectIcons["اللغة-العربية"]} عربي</Link></li>
                <li className="subject-item"><Link to="/home/10/تكنولوجيا">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا-المعلومات</Link></li>
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
                <li className="subject-item"><Link to="/home/11/صناعي/فيزياء">{subjectIcons["فيزياء"]} الفيزياء</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/الرياضيات">{subjectIcons["الرياضيات"]} الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/اللغة-العربية">{subjectIcons["اللغة-العربية"]} اللغة العربية</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/التربية-الاسلامية">{subjectIcons["دين"]} التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/تكنولوجيا-المعلومات">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا المعلومات</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/اللغة-الانجليزية">{subjectIcons["اللغة-الانجليزية"]} انجليزي</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/الرسم-الصناعي">{subjectIcons["الرسم-الصناعي"]} رسم صناعي</Link></li>
                <li className="subject-item"><Link to="/home/11/صناعي/علم-الصناعة">{subjectIcons["علم-الصناعة"]} علم صناعة</Link></li>
              </ul>
            </div>

            {/* العلمي */}
            <div className="box scientific">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["العلمي"]}</div>
                <h3 className="box-title">العلمي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/11/علمي/الفيزياء">{subjectIcons["فيزياء"]} الفيزياء</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/الكيمياء">{subjectIcons["الكيمياء"]} الكيمياء</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/الاحياء">{subjectIcons["احياء"]} الأحياء</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/الرياضيات">{subjectIcons["الرياضيات"]} الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/التربية-الاسلامية">{subjectIcons["دين"]} التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/اللغة-العربية">{subjectIcons["اللغة-العربية"]} اللغة العربية</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/تكنولوجيا-المعلومات">{subjectIcons["تكنولوجيا-المعلومات"]} تكنولوجيا المعلومات</Link></li>
                <li className="subject-item"><Link to="/home/11/علمي/اللغة-الانجليزية">{subjectIcons["اللغة-الانجليزية"]} اللغة الإنجليزية</Link></li>
              </ul>
            </div>

            {/* الأدبي */}
            <div className="box literary">
              <div className="box-header">
                <div className="box-icon" style={{ fontSize: "2rem" }}>{branchIcons["الأدبي"]}</div>
                <h3 className="box-title">الأدبي</h3>
              </div>

              <ul className="subjects-list">
                <li className="subject-item"><Link to="/home/11/ادبي/التربية-الاسلامية">{subjectIcons["دين"]} التربية الإسلامية</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/الجغرافيا">{subjectIcons["الجغرافيا"]} الجغرافيا</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/التاريخ">{subjectIcons["التاريخ"]} التاريخ</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/الرياضيات">{subjectIcons["الرياضيات"]} الرياضيات</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-العربية-الاداب">{subjectIcons["اللغة-العربية-الاداب"]} عربي أدب</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-الانجليزية-الاداب">{subjectIcons["اللغة-الانجليزية-الاداب"]} انجليزي أدب</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/تكنولوجيا-المعلومات">{subjectIcons["تكنولوجيا-المعلومات"]} التكنولوجيا</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/الثقافة-العلمية">{subjectIcons["الثقافة-العلمية"]} الثقافة العلمية</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-العربية">{subjectIcons["اللغة-العربية"]} عربي</Link></li>
                <li className="subject-item"><Link to="/home/11/ادبي/اللغة-الانجليزية">{subjectIcons["اللغة-الانجليزية"]} انجليزي</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
