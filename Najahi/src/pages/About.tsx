import ScrollToTop from '../components/ScroolToTop.tsx'



export default function About() {
  return (
    <section id="about" className="page active">
      <div className="page-header">
        <h1>من نحن</h1>
      </div>

      <div className="about-content">
        <p>
          منصة "نجاحي" هي مبادرة تعليمية مبتكرة تهدف إلى دعم طلاب المرحلة
          الثانوية في فلسطين. تأسست المنصة بهدف سد الفجوة التعليمية وتوفير موارد
          تعليمية شاملة ومجانية للطلاب في الصفوف العاشر والحادي عشر والثاني عشر.
        </p>

        <p>
          نحن نؤمن بأن التعليم الجيد هو حق لكل طالب، بغض النظر عن ظروفه
          الاجتماعية أو الاقتصادية. لذلك، قمنا بتطوير منصة متكاملة توفر المواد
          التعليمية، مجموعات الدراسة، التوجيه الأكاديمي، وفرص التواصل مع
          المعلمين والطلاب الآخرين.
        </p>

        <p>
          تضم منصة "نجاحي" فريقاً من المعلمين المتطوعين، الخريجين المتفوقين،
          والمتخصصين في التربية الذين يعملون بجد لتطوير محتوى تعليمي عالي الجودة
          يتناسب مع المنهاج الفلسطيني ويواكب أحدث طرق التعليم التفاعلية.
        </p>
      </div>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <h3>تعليم متميز</h3>
          <p>
            نوفر مواد تعليمية عالية الجودة لجميع الصفوف والمسارات الدراسية، مع
            مراعاة الفروق الفردية بين الطلاب.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-hands-helping"></i>
          </div>
          <h3>دعم متكامل</h3>
          <p>
            نقدم الدعم الأكاديمي والنفسي للطلاب من خلال مجموعات الدراسة والتوجيه
            الفردي والموارد المساعدة.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fas fa-users"></i>
          </div>
          <h3>مجتمع تعاوني</h3>
          <p>
            نعمل على بناء مجتمع تعليمي تعاوني حيث يمكن للطلاب تبادل المعرفة
            والموارد والدعم فيما بينهم.
          </p>
        </div>
      </div>
        <ScrollToTop />
    </section>
  );
}
