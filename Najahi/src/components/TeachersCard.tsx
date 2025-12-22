
interface TeacherCardProps {
  name: string;
  title: string;
  rating: number;
  qualifications: string;
  location: string;
  price: string;
  subjects: string[];
  icon: string;
}

function TeachersCard({
  name,
  title,
  rating,
  qualifications,
  location,
  price,
  subjects,
  icon
}: TeacherCardProps) {
  return (
    
    <section className="teacher-card">
      <div className="teacher-id">
        <img
          src={icon}
          alt={`صورة المعلم ${name}`}
          className="teacher-icon"
        /> 

        <h2 className="teacher-name">{name}</h2>
        <h3 className="teacher-title">{title}</h3>

        <p className="teacher-rating">
          التقييم: {rating} / 5
        </p>
      </div>
     <div className="divider">
      <p className="teacher-qualifications">
        <strong style={{color:"white"}}>المؤهلات:</strong> {qualifications}
      </p>

      <p className="teacher-location">
        <strong style={{color:"white"}}>الموقع:</strong> {location}
      </p>

      <p className="teacher-price">
        <strong style={{color:"white"}}>السعر:</strong> {price}
      </p>

      <div className="teacher-subjects">
        <strong style={{color:"white"}}>المواد التي يدرّسها:</strong>
        <ul>
          {subjects.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      </div>

      <button 
       
      className="contact-teacher-button join-button">
        تواصل مع المعلم
      </button>
      </div>
    </section>
  );
}

export default TeachersCard;