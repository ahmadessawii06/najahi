import { useParams, Link } from "react-router-dom";

const icons: Record<string, string> = {
  فيزياء: "fas fa-atom",
  كيمياء: "fas fa-flask",
  احياء: "fas fa-dna",
  رياضيات: "fas fa-calculator",
  انجليزي: "fas fa-language",
  دين: "fas fa-mosque",
  "دراسات فلسطينية": "fas fa-map-marked-alt",
  "اللغة العربية": "fas fa-book",
  "تكنولوجيا المعلومات": "fas fa-laptop-code",
  "رسم صناعي": "fas fa-ruler-combined",
  "علم صناعة": "fas fa-cogs",
  الجغرافيا: "fas fa-globe-asia",
  التاريخ: "fas fa-history",
  "اللغة العربية - الاداب": "fas fa-book-reader",
  "اللغة الانجليزية - الاداب": "fas fa-book-open",
  "الثقافة العلمية": "fas fa-flask",
};

function SubHomePage() {
  console.log(useParams())
  const { materialName, track, grade } = useParams<{
    grade: string;
    track: string;
    materialName: string;
  }>();

  const materialIcon = icons[materialName || ""] || "fas fa-book";

  const materialDesc = track? `الصف ${grade} - ${track}` : `الصف ${grade}` ;

  return (
    <>
      <div className="material-header">
        <div className="material-info">
          <div className="material-icon">
            <i className={materialIcon}></i>
          </div>

          <div className="material-details">
            <h1>{materialName}</h1>
            <p> الوصف: <span>{materialDesc}</span> </p>
          </div>
        </div>

        <Link to="/home" className="back-btn"> العودة للمواد</Link>
      </div>

      <div className="resources-container">
        <div className="resource-card">
          <div className="resource-header">
            <div className="resource-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3 className="resource-title">الامتحانات والاختبارات</h3>
          </div>
          <ul className="resource-list"></ul>
        </div>

        <div className="resource-card">
          <div className="resource-header">
            <div className="resource-icon">
              <i className="fas fa-book-open"></i>
            </div>
            <h3 className="resource-title">المواد التعليمية</h3>
          </div>
          <ul className="resource-list"></ul>
        </div>

        <div className="resource-card">
          <div className="resource-header">
            <div className="resource-icon">
              <i className="fas fa-sticky-note"></i>
            </div>
            <h3 className="resource-title">الملخصات والمراجعات</h3>
          </div>
          <ul className="resource-list"></ul>
        </div>

        <div className="resource-card">
          <div className="resource-header">
            <div className="resource-icon">
              <i className="fas fa-video"></i>
            </div>
            <h3 className="resource-title">الفيديوهات التعليمية</h3>
          </div>
          <ul className="resource-list"></ul>
        </div>
      </div>
    </>
  );
}

export default SubHomePage;