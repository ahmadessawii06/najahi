import React, { useState } from 'react'; 
function Login() {
  const [activeForm, setActiveForm] = useState<'login' | 'signup' | 'forgot'>('login');
  
  const showAuthForm = (formType: 'login' | 'signup' | 'forgot') => {
    setActiveForm(formType);
  };
  
  const continueAsGuest = () => {
    alert('✅ تم المتابعة كزائر!');
    console.log('Continue as guest');
  };
  
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('✅ تم تسجيل الدخول بنجاح!');
    console.log('Login submitted');
  };
  
  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('✅ تم إنشاء الحساب بنجاح!');
    console.log('Signup submitted');
    setActiveForm('login'); 
  };

  const handleForgotSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(' تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
    console.log('Forgot password submitted');
    setActiveForm('login'); 
  };

  return (
      <section id="login" className="page active">
        <div className="page-header">
          <h1>مرحباً بك في منصة نجاحي</h1>
          <p>منصة تعليمية متكاملة لطلاب الثانوية العامة (الصفوف 10، 11، 12)</p>
        </div>

        <div className="auth-container">
          <div className="auth-box">
            <div className="auth-tabs">
              <div 
                className={`auth-tab ${activeForm === 'login' ? 'active' : ''}`} 
                onClick={() => showAuthForm('login')}
              >
                تسجيل الدخول
              </div>
              <div 
                className={`auth-tab ${activeForm === 'signup' ? 'active' : ''}`} 
                onClick={() => showAuthForm('signup')}
              >
                إنشاء حساب
              </div>
            </div>

            <form 
              id="login-form" 
              className={`auth-form ${activeForm === 'login' ? 'active' : ''}`}
              onSubmit={handleLoginSubmit}
            >
              <div className="form-group">
                <label htmlFor="login-email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="login-email"
                  className="form-control"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="login-password">كلمة المرور</label>
                <input
                  type="password"
                  id="login-password"
                  className="form-control"
                  placeholder="أدخل كلمة المرور"
                  required
                />
              </div>

              <button type="submit" className="btn">تسجيل الدخول</button>

              <div className="auth-links">
                <button 
                  type="button"
                  className="link-button"
                  onClick={() => showAuthForm('forgot')}
                >
                  نسيت كلمة المرور؟
                </button>
              </div>

              <div className="guest-button-container">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={continueAsGuest}
                >
                  المتابعة كزائر
                </button>
              </div>
            </form>

            <form 
              id="signup-form" 
              className={`auth-form ${activeForm === 'signup' ? 'active' : ''}`}
              onSubmit={handleSignupSubmit}
            >
              <div className="form-group">
                <label htmlFor="signup-name">الاسم الكامل</label>
                <input
                  type="text"
                  id="signup-name"
                  className="form-control"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="signup-email"
                  className="form-control"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="signup-password">كلمة المرور</label>
                  <input
                    type="password"
                    id="signup-password"
                    className="form-control"
                    placeholder="أنشئ كلمة مرور"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="signup-confirm" className = "password">تأكيد كلمة المرور</label>
                  <input
                    type="password"
                    id="signup-confirm"
                    className="form-control"
                    placeholder="أعد إدخال كلمة المرور"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="signup-grade">الصف الدراسي</label>
                <select id="signup-grade" className="form-control" required>
                  <option value="">اختر صفك الدراسي</option>
                  <option value="10">الصف العاشر</option>
                  <option value="11">الصف الحادي عشر</option>
                  <option value="12">الصف الثاني عشر</option>
                </select>
              </div>

              <button type="submit" className="btn btn-secondary">إنشاء حساب</button>
            </form>

            <form 
              id="forgot-form" 
              className={`auth-form ${activeForm === 'forgot' ? 'active' : ''}`}
              onSubmit={handleForgotSubmit}
            >
              <div className="form-group">
                <label htmlFor="forgot-email">البريد الإلكتروني</label>
                <input
                  type="email"
                  id="forgot-email"
                  className="form-control"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>

              <p className="forgot-message">
                سنرسل إليك رابطاً لإعادة تعيين كلمة المرور الخاصة بك.
              </p>

              <button type="submit" className="btn">إرسال رابط التعيين</button>

              <div className="auth-links">
                <button 
                  type="button"
                  className="link-button"
                  onClick={() => showAuthForm('login')}
                >
                  العودة لتسجيل الدخول
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
   
  );
};

export default Login;