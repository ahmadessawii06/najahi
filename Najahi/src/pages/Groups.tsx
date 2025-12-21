import '../index.css';
import facebookIcon from '../assets/Social-Icons/facebook.png'
import discordIcon from '../assets/Social-Icons/discord.png'
import whatsappIcon from '../assets/Social-Icons/whatsapp.png'
import telegramIcon from '../assets/Social-Icons/telegram.png'
import zoomIcon from '../assets/Social-Icons/zoom.png'
import massengerIcon from '../assets/Social-Icons/messenger.png'
import ScrollToTop from '../components/ScroolToTop.tsx'
// Arrow Function 
const Groups = () => {
  // Delcare Gruops
  const groupsData = [
    {
      id: 1,
      platform: 'facebook',
      icon: facebookIcon,
      title: 'مجموعة فيسبوك',
      description: 'طلاب الصف العاشر - مسار أكاديمي',
      subject: 'رياضيات، علوم، لغة عربية',
      details: 'مجموعة لطلاب الصف العاشر المسار الأكاديمي لتبادل الملاحظات وحل الواجبات والاستعداد للامتحانات.',
      stats: [
        { label: 'عدد الأعضاء:', value: '245 طالب' },
        { label: 'نشاط المجموعة:', value: 'نشطة يومياً' }
      ],
      buttonText: 'انضم إلى المجموعة',
      link: 'https://www.facebook.com/groups/1658198000983162?locale=ar_AR',
    },
    { 
      id: 2,
      platform: 'whatsapp',
      icon: whatsappIcon,
      title: 'مجموعة واتساب',
      description: 'طلاب الصف الحادي عشر - فرع علمي',
      subject: 'فيزياء، كيمياء، أحياء',
      details: 'مجموعة واتساب مخصصة لطلاب الفرع العلمي لمناقشة التجارب العملية وحل المسائل العلمية المعقدة.',
      stats: [
        { label: 'عدد الأعضاء:', value: '50 طالب (محدودة)' },
        { label: 'نشاط المجموعة:', value: 'نشطة أسبوعياً' }
      ],
      buttonText: 'انضم إلى المجموعة',
      link: 'https://chat.whatsapp.com'
    },
    {
      id: 3,
      platform: 'telegram',
      icon: telegramIcon,
      title: 'قناة تيليجرام',
      description: 'طلاب الصف الثاني عشر - جميع الفروع',
      subject: 'جميع المواد، توجيهي',
      details: 'قناة تيليجرام لبث الدروس المصورة وتبادل الملخصات والاختبارات التجريبية لامتحان التوجيهي.',
      stats: [
        { label: 'عدد الأعضاء:', value: '1200 طالب' },
        { label: 'نشاط المجموعة:', value: 'نشطة يومياً' }
      ],
      buttonText: 'انضم إلى القناة',
      link: 'https://t.me/fajernews'
    },
    {
      id: 4,
      platform: 'other',
      icon: zoomIcon,
      title: 'لقائات زوم',
      description: 'طلاب الصف الثاني عشر الأدبي',
      subject: 'تاريخ، جغرافيا، لغة عربية',
      details: 'مجموعة دراسة مباشرة أسبوعية عبر Zoom لمراجعة المواد الأدبية ومناقشة القضايا الأدبية والتحليل النصي.',
      stats: [
        { label: 'عدد الأعضاء:', value: '30 طالب' },
        { label: 'الاجتماع القادم:', value: 'السبت المقبل، 4:00 مساءً' }
      ],
      buttonText: 'انضم إلى الاجتماع',
      link: 'https://najah.zoom.us/j/95107749076?pwd=MNn8Ben3umDdP77ZxRsTfoedLKd7Vm.1#success'
    },
    {
  id: 5,
  platform: 'discord',
  icon: discordIcon,
  title: 'مجموعة ديسكورد للعلوم',
  description: 'طلاب الصف الحادي عشر العلمي',
  subject: 'رياضيات، فيزياء، كيمياء',
  details: 'مجموعة دراسة تفاعلية على Discord لمناقشة مسائل العلوم وحل الواجبات الأسبوعية، مع جلسات سؤال وجواب مباشرة.',
  stats: [
    { label: 'عدد الأعضاء:', value: '45 طالب' },
    { label: 'الاجتماع القادم:', value: 'الأربعاء، 6:00 مساءً' }
  ],
  buttonText: 'انضم إلى القروب',
  link: 'https://discord.gg/fake-link-for-study-group'
},{
  id: 6,
  platform: 'facebook',
  icon: facebookIcon,
  title: 'مجموعة فيسبوك للرياضيات',
  description: 'طلاب الصف الحادي عشر العلمي',
  subject: 'رياضيات، تفاضل وتكامل',
  details: 'مجموعة فيسبوك لمناقشة مسائل الرياضيات الصعبة، شرح الدروس، ومشاركة أوراق العمل.',
  stats: [
    { label: 'عدد الأعضاء:', value: '320 طالب' },
    { label: 'نشاط المجموعة:', value: 'نشطة يومياً' }
  ],
  buttonText: 'انضم إلى المجموعة',
  link: 'https://www.facebook.com/groups/fake-math-group'
},{
  id: 7,
  platform: 'messenger',
  icon: massengerIcon,
  title: 'مجموعة ماسنجر للواجبات',
  description: 'طلاب الصف العاشر',
  subject: 'جميع المواد',
  details: 'مجموعة ماسنجر سريعة لتبادل الواجبات اليومية والتنبيهات المهمة بين الطلاب.',
  stats: [
    { label: 'عدد الأعضاء:', value: '25 طالب' },
    { label: 'نشاط المجموعة:', value: 'نشطة يومياً' }
  ],
  buttonText: 'انضم إلى المجموعة',
  link: 'https://m.me/join/fake-messenger-group'
},{
  id: 8,
  platform: 'whatsapp',
  icon: whatsappIcon,
  title: 'مجموعة واتساب للعلوم',
  description: 'طلاب الصف الثاني عشر العلمي',
  subject: 'فيزياء، كيمياء',
  details: 'مجموعة واتساب لمراجعة الدروس العلمية، حل الأسئلة الوزارية، والاستعداد للامتحانات.',
  stats: [
    { label: 'عدد الأعضاء:', value: '40 طالب' },
    { label: 'نشاط المجموعة:', value: 'نشطة أسبوعياً' }
  ],
  buttonText: 'انضم إلى المجموعة',
  link: 'https://chat.whatsapp.com/fake-whatsapp-group'
},{
  id: 9,
  platform: 'telegram',
  icon: telegramIcon,
  title: 'قناة تيليجرام للتوجيهي',
  description: 'طلاب التوجيهي - جميع الفروع',
  subject: 'ملخصات، امتحانات تجريبية',
  details: 'قناة تيليجرام لنشر ملخصات الدروس، نماذج امتحانات، ونصائح دراسية يومية.',
  stats: [
    { label: 'عدد الأعضاء:', value: '1500 طالب' },
    { label: 'نشاط القناة:', value: 'نشطة يومياً' }
  ],
  buttonText: 'انضم إلى القناة',
  link: 'https://t.me/fake-tawjihi-channel'
}
,{
  id: 9,
  platform: 'telegram',
  icon: telegramIcon,
  title: 'قناة تيليجرام للتوجيهي',
  description: 'طلاب التوجيهي - جميع الفروع',
  subject: 'ملخصات، امتحانات تجريبية',
  details: 'قناة تيليجرام لنشر ملخصات الدروس، نماذج امتحانات، ونصائح دراسية يومية.',
  stats: [
    { label: 'عدد الأعضاء:', value: '1500 طالب' },
    { label: 'نشاط القناة:', value: 'نشطة يومياً' }
  ],
  buttonText: 'انضم إلى القناة',
  link: 'https://t.me/fake-tawjihi-channel'
}


  ];



  return (
    <section id="groups" className="groups-page">
      <div className="page-header">
        <h1 className="page-title">مجموعات الدراسة</h1>
        <p className="page-subtitle">
          انضم إلى مجموعات الدراسة عبر منصات التواصل الاجتماعي للدراسة بشكل تعاوني
        </p>
      </div>

      <div className="groups-container">
        {groupsData.map((group) => (
          <div key={group.id} className="group-card">
            <div className="group-platform">
              <div 
                className="platform-icon"
             
              >
                            <img 
                src={group.icon}
                alt={group.platform}
                className="platform-image"
              />
              </div>
              <div>
                <h3 className="group-title">{group.title}</h3>
                <p className="group-description">{group.description}</p>
              </div>
            </div>

            <span className="group-subject">{group.subject}</span>
            <p className="group-details">{group.details}</p>

            <div className="group-stats">
              {group.stats.map((stat, index) => (
                <p key={index} className="stat-item">
                  <strong>{stat.label}</strong> {stat.value}
                </p>
              ))}
            </div>

            <a
              href={group.link}
              className="join-button"
              target="_blank"
             
            >
              {group.buttonText}
            </a>
          </div>
        ))}
      </div>
        <ScrollToTop />
    </section>
  );
};

export default Groups;
