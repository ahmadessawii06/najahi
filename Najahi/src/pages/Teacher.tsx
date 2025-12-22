import ScrollToTop from "../components/ScroolToTop.tsx";
import TeachersCard from "../components/TeachersCard";
import BioloyIcon from "../assets/Teacher-Photos/biology.jpg";
import MathIcon from "../assets/Teacher-Photos/Math.jpg";
import ArabicIcon from "../assets/Teacher-Photos/Arabic.jpg";
import PhiIcon from "../assets/Teacher-Photos/chemistry.jpg";
import tare5 from "../assets/Teacher-Photos/geography.jpg";
function Teachers() {
  return (
    <>
     <div className="Teacher-page"> <div className="page-header">
        <h1>المعلمون القريبون</h1>
        <p>
          ابحث عن معلمين مؤهلين قريبين منك للمساعدة في التعلم والدروس الخصوصية
        </p>
      </div>
      <div className="teachers-container">
        <TeachersCard
          name={"أ. محمد علي"}
          title={"معلم رياضيات"}
          rating={4}
          qualifications={"ماجيستير رياضيات"}
          location={"نابلس"}
          price={"للساعة 100 شيكل"}
          subjects={["رياضيات"]}
          icon={MathIcon}
        />

        <TeachersCard
          name={"أ. سارة أحمد"}
          title={"معلمة فيزياء+ كيمياء"}
          rating={4.5}
          qualifications={"ماجيستير فيزياء"}
          location={"رام الله"}
          price={"للساعة 100 شيكل"}
          subjects={["فيزياء ", "كيمياء"]}
          icon={PhiIcon}
        />

        <TeachersCard
          name={"د. نورا حسن"}
          title={"معلمة أحياء "}
          rating={4}
          qualifications={"دكتوراه أحياء"}
          location={"الخليل"}
          price={"للساعة 90 شيكل"}
          subjects={["أحياء"]}
          icon={BioloyIcon}
        />

        <TeachersCard
          name={"أ. أحمد عبد الرحمن"}
          title={"مدرس لغة عربية وآداب"}
          rating={4}
          qualifications={"ماجيستير في الأدب العربي"}
          location={"جنين"}
          price={"للساعة 60 شيكل"}
          subjects={["لغة عربية", "أدب"]}
          icon={ArabicIcon}
        />

        <TeachersCard
          name={"د. ليلى مصطفى"}
          title={"معلمة تاريخ وجغرافيا"}
          rating={4.3}
          qualifications={"دكتوراه في التاريخ"}
          location={"طولكرم"}
          price={"للساعة 70 شيكل"}
          subjects={["تاريخ", "جغرافيا"]}
          icon={tare5}
        />
      </div>
      <ScrollToTop /></div>
    </>
  );
}
export default Teachers;
