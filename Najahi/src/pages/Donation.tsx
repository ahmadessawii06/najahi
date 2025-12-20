import { TextField} from "@mui/material"
function Donation() {
  return (
      <>
      <div id="donation" className="page active">
      <div className="page-header">
        <h1>التبرع بالمواد التعليمية</h1>
        <p>
          ساهم في بناء مجتمع تعليمي أفضل من خلال التبرع بالمواد التعليمية
          لزملائك الطلاب
        </p>
      </div>

      <div className="donation-container">
        <div className="donate-form">
          <h2 style={{marginBottom:"25px" , color:"blue"}}> تواصل معنا للتبرع بمواد تعليمية </h2>

          <form id="donation-form"  onSubmit={()=> alert("شكرا لتبرعك! سيتم التواصل معك ")} >
            <div className="form-group form-row">
                <TextField variant="outlined" label="اسم المستخدم" dir="rtl" required  />
                <TextField variant="outlined" label="البريد الالكتروني" type="email" dir="rtl" required />
            </div>
            <div className="form-group">
              <label htmlFor="item-name">اسم المادة/الكتاب</label>
              <input
                type="text"
                id="item-name"
                className="form-control"
                placeholder="مثال: كتاب الرياضيات للصف العاشر"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="item-type">نوع المادة</label>
                <select id="item-type" className="form-control" required>
                  <option value="">اختر نوع المادة</option>
                  <option value="book">كتاب</option>
                  <option value="notebook">دفتر ملاحظات</option>
                  <option value="stationery">أدوات قرطاسية</option>
                  <option value="folder">مجلد</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="item-condition">حالة المادة</label>
                <select id="item-condition" className="form-control" required>
                  <option value="">اختر الحالة</option>
                  <option value="new">جديدة</option>
                  <option value="good">جيدة</option>
                  <option value="acceptable">مقبولة</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="item-description">وصف المادة</label>
              <textarea
                id="item-description"
                className="form-control"
                placeholder="صف المادة التي تريد التبرع بها وتفاصيلها..."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>رفع صورة للمادة (اختياري)</label>
              <div className="file-upload">
                <i
                  className="fas fa-cloud-upload-alt"
                  style= {{fontSize:"2rem" , color:"blue" , marginBottom: "10px"}}></i>
                <p>اسحب وأفلت الصورة هنا أو انقر للرفع</p>
                <p style={{fontSize:"0.9rem", color:"gray"}}>
                  الحد الأقصى لحجم الملف: 5MB
                </p>
              </div>
            </div>

            <button type="submit" className="btn btn-secondary"> تقديم التبرع </button>
          </form>
        </div>

        <div className="donations-grid">
          <h2 style={{marginBottom:"25px" , color:"blue"}}>
            المواد المتاحة للتبرع
          </h2>

          <div className="donation-item">
            <div className="donation-img">
              <i className="fas fa-book"></i>
            </div>
            <div className="donation-info">
              <h4>كتاب الفيزياء للصف الحادي عشر العلمي</h4>
              <p>حالة الكتاب: جيدة جداً، بدون كتابات تذكر</p>
              <p>متبرع: أحمد محمد</p>
              <span className="donation-status status-available">متاح</span>
            </div>
          </div>

          <div className="donation-item">
            <div className="donation-img">
              <i className="fas fa-pencil-alt"></i>
            </div>
            <div className="donation-info">
              <h4>أقلام وأدوات قرطاسية متنوعة</h4>
              <p>مجموعة من الأقلام والأدوات المكتبية غير المستخدمة</p>
              <p>متبرع: سارة خالد</p>
              <span className="donation-status status-available">متاح</span>
            </div>
          </div>

          <div className="donation-item">
            <div className="donation-img">
              <i className="fas fa-sticky-note"></i>
            </div>
            <div className="donation-info">
              <h4>دفاتر ملاحظات للصف الثاني عشر الأدبي</h4>
              <p>3 دفاتر ملاحظات جديدة لمواد الأدبي</p>
              <p>متبرع: محمد عبد الله</p>
              <span className="donation-status status-reserved">محجوز</span>
            </div>
          </div>

          <div className="donation-item">
            <div className="donation-img">
              <i className="fas fa-folder"></i>
            </div>
            <div className="donation-info">
              <h4>مجلدات تنظيم للمواد الدراسية</h4>
              <p>5 مجلدات بلاستيكية بحالة ممتازة</p>
              <p>متبرع: خالد محمود</p>
              <span className="donation-status status-available">متاح</span>
            </div>
          </div>
        </div>
      </div>
      </div>
   </>
  )
}

export default Donation