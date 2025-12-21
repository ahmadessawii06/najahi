
import  { useState, useEffect } from 'react';


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // التحقق من موقع التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // التمرير السلس إلى الأعلى
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="التمرير إلى الأعلى"
          title="التمرير إلى الأعلى"
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;