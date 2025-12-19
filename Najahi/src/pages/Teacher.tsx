
import TeachersCard from "../components/TeachersCard";

function Teachers() {
    return (
        <>

 <div className="page-header">
        <h1>المعلمون القريبون</h1>
        <p>
          ابحث عن معلمين مؤهلين قريبين منك للمساعدة في التعلم والدروس الخصوصية
        </p>
      </div>
                <div className="teachers-container">

  <TeachersCard name={"أ. محمد علي"}
  title={"معلم رياضيات"}
  rating={4}
  qualifications={"ماجيستير رياضيات"}
  location={"نابلس"}
  price= {"للساعة 100 شيكل" }
  subjects={["رياضيات"]}
  icon={"/math.jpg"} />

<TeachersCard name={"أ. سارة أحمد"}
  title={"معلمة فيزياء+ كيمياء"}
  rating={4.5}
  qualifications={"ماجيستير فيزياء"}
  location={"رام الله"}
  price={"للساعة 100 شيكل"}
  subjects={["فيزياء " ,"كيمياء"]}
  icon={"/chemistry.jpg"} />

  <TeachersCard name={"د. نورا حسن"}
  title={"معلمة أحياء "}
  rating={4}
  qualifications={"دكتوراه أحياء"}
  location={"الخليل"}
  price={"للساعة 90 شيكل"}
  subjects={["أحياء"]}
  icon={"/biology.jpg"} />

  <TeachersCard name={"أ. أحمد عبد الرحمن"}
  title={"مدرس لغة عربية وآداب"}
  rating={4}
  qualifications={"ماجيستير في الأدب العربي"}
  location={"جنين"}
  price={"للساعة 60 شيكل"}
  subjects={["لغة عربية", "أدب"]}
  icon={"/Arabic.jpg"} />

  <TeachersCard name={"د. ليلى مصطفى"}
  title={"معلمة تاريخ وجغرافيا"}
  rating={4.3}
  qualifications={"دكتوراه في التاريخ"}
  location={"طولكرم"}
  price={"للساعة 70 شيكل"}
  subjects={["تاريخ", "جغرافيا"]}
  icon={"/geography.jpg"} />
    
  </div>
    </>
    )}
export default Teachers;  