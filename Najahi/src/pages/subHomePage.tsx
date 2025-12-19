
import { useParams, Link } from "react-router-dom";

// سمايلات لكل مادة
const icons: Record<string, string> = {
  فيزياء: "⚛️",
  كيمياء: "🧪",
  احياء: "🧬",
  رياضيات: "➗",
  انجليزي: "🇬🇧",
  دين: "🕌",
  "دراسات فلسطينية": "🗺️",
  "اللغة العربية": "📘",
  "تكنولوجيا المعلومات": "💻",
  "رسم صناعي": "📐",
  "علم صناعة": "🏭",
  الجغرافيا: "🌍",
  التاريخ: "🏺",
  "اللغة العربية - الاداب": "✒️",
  "اللغة الانجليزية - الاداب": "📖",
  "الثقافة العلمية": "🔬",
};

// سمايلات للموارد التعليمية
const resourceIcons: Record<string, string> = {
  "الامتحانات والاختبارات": "📝",
  "المواد التعليمية": "📚",
  "الملخصات والمراجعات": "📄",
  "الفيديوهات التعليمية": "🎥",
};

function SubHomePage() {
  const { materialName, track, grade } = useParams<{
    grade: string;
    track: string;
    materialName: string;
  }>();

  const materialIcon = icons[materialName || ""] || "📘";
  const materialDesc = track ? `الصف ${grade} - ${track}` : `الصف ${grade}`;

  const resources = [
    "الامتحانات والاختبارات",
    "المواد التعليمية",
    "الملخصات والمراجعات",
    "الفيديوهات التعليمية",
  ];

  return (
    <>
      <div className="material-header">
        <div className="material-info">
          <div
            className="material-icon"
            style={{ fontSize: "2.5rem" }}
          >
            {materialIcon}
          </div>

          <div className="material-details">
            <h1>{materialName}</h1>
            <p>
              الوصف: <span>{materialDesc}</span>
            </p>
          </div>
        </div>

        <Link to="/home" className="back-btn">
          العودة للمواد
        </Link>
      </div>

      <div className="resources-container">
        {resources.map((res) => (
          <div className="resource-card" key={res}>
            <div className="resource-header">
              <div
                className="resource-icon"
                style={{ fontSize: "1.8rem" }}
              >
                {resourceIcons[res]}
              </div>
              <h3 className="resource-title">{res}</h3>
            </div>
            <ul className="resource-list"></ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default SubHomePage;
