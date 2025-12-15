
      // Navigation functionality
      const navToggle = document.getElementById("navToggle");
      const navLinks = document.getElementById("navLinks");

      navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      // Material data storage
      const materialResources = {
        فيزياء: {
          exams: [
            {
              name: "امتحان الفصل الأول في الفيزياء",
              type: "PDF",
              size: "2.3MB",
            },
            { name: "امتحان تجريبي للفيزياء 2023", type: "PDF", size: "1.8MB" },
            {
              name: "أسئلة امتحانات سابقة مع الحلول",
              type: "ZIP",
              size: "4.5MB",
            },
          ],
          materials: [
            {
              name: "كتاب الفيزياء الرسمي للصف العاشر",
              type: "PDF",
              size: "15MB",
            },
            {
              name: "ملزمة التجارب العملية في الفيزياء",
              type: "PDF",
              size: "3.2MB",
            },
            {
              name: "شرح قوانين الفيزياء الأساسية",
              type: "PDF",
              size: "2.1MB",
            },
          ],
          summaries: [
            { name: "ملخص شامل لوحدات الفيزياء", type: "PDF", size: "1.5MB" },
            { name: "خرائط ذهنية للفيزياء", type: "PDF", size: "800KB" },
            { name: "ملخص القوانين الفيزيائية", type: "PDF", size: "1.2MB" },
          ],
          videos: [
            {
              name: "شرح التجارب العملية - قناة التعليم",
              type: "Youtube",
              duration: "45 دقيقة",
            },
            {
              name: "حل مسائل الفيزياء المعقدة",
              type: "Youtube",
              duration: "30 دقيقة",
            },
            {
              name: "دورة مراجعة الفيزياء للامتحان",
              type: "Youtube",
              duration: "2 ساعة",
            },
          ],
        },
        رياضيات: {
          exams: [
            { name: "امتحان الجبر للفصل الأول", type: "PDF", size: "1.8MB" },
            { name: "امتحان الهندسة والقياس", type: "PDF", size: "2.1MB" },
            {
              name: "مجموعة امتحانات رياضيات سابقة",
              type: "ZIP",
              size: "5.2MB",
            },
          ],
          materials: [
            { name: "كتاب الرياضيات الرسمي كامل", type: "PDF", size: "22MB" },
            { name: "تمارين وحلول الرياضيات", type: "PDF", size: "4.5MB" },
            { name: "دليل المعلم في الرياضيات", type: "PDF", size: "8.3MB" },
          ],
          summaries: [
            { name: "ملخص قوانين الرياضيات", type: "PDF", size: "1.1MB" },
            { name: "خرائط ذهنية للرياضيات", type: "PDF", size: "950KB" },
            { name: "ملخص الهندسة التحليلية", type: "PDF", size: "1.4MB" },
          ],
          videos: [
            {
              name: "شرح الدوال والتمثيل البياني",
              type: "Youtube",
              duration: "40 دقيقة",
            },
            {
              name: "حل المعادلات التفاضلية",
              type: "Youtube",
              duration: "35 دقيقة",
            },
            {
              name: "دورة شاملة في الهندسة",
              type: "Youtube",
              duration: "3 ساعات",
            },
          ],
        },
        كيمياء: {
          exams: [
            { name: "امتحان الكيمياء العضوية", type: "PDF", size: "1.9MB" },
            { name: "امتحان تجريبي للكيمياء 2023", type: "PDF", size: "2.0MB" },
            { name: "أسئلة الكيمياء التحليلية", type: "PDF", size: "1.5MB" },
          ],
          materials: [
            { name: "كتاب الكيمياء الرسمي", type: "PDF", size: "18MB" },
            { name: "دليل التجارب الكيميائية", type: "PDF", size: "3.8MB" },
            { name: "شرح الجدول الدوري", type: "PDF", size: "2.5MB" },
          ],
          summaries: [
            { name: "ملخص الكيمياء العضوية", type: "PDF", size: "1.3MB" },
            { name: "الجدول الدوري مع الخواص", type: "PDF", size: "900KB" },
            { name: "ملخص التفاعلات الكيميائية", type: "PDF", size: "1.1MB" },
          ],
          videos: [
            {
              name: "شرح التفاعلات الكيميائية",
              type: "Youtube",
              duration: "50 دقيقة",
            },
            {
              name: "التجارب الكيميائية العملية",
              type: "Youtube",
              duration: "25 دقيقة",
            },
            {
              name: "مراجعة الكيمياء العضوية",
              type: "Youtube",
              duration: "1.5 ساعة",
            },
          ],
        },
      };

      // Default resources for any material
      const defaultResources = {
        exams: [
          { name: "امتحان الفصل الأول", type: "PDF", size: "1.5MB" },
          { name: "امتحان الفصل الثاني", type: "PDF", size: "1.7MB" },
          { name: "امتحان تجريبي نهائي", type: "PDF", size: "2.0MB" },
        ],
        materials: [
          { name: "الكتاب الرسمي للمادة", type: "PDF", size: "15MB" },
          { name: "دليل الأنشطة العملية", type: "PDF", size: "3.0MB" },
          { name: "شرح الدروس الأساسية", type: "PDF", size: "2.5MB" },
        ],
        summaries: [
          { name: "ملخص شامل للمادة", type: "PDF", size: "1.2MB" },
          { name: "خرائط ذهنية للمادة", type: "PDF", size: "850KB" },
          { name: "ملخص القوانين والنظريات", type: "PDF", size: "1.0MB" },
        ],
        videos: [
          {
            name: "شرح دروس المادة - الجزء الأول",
            type: "Youtube",
            duration: "40 دقيقة",
          },
          {
            name: "شرح دروس المادة - الجزء الثاني",
            type: "Youtube",
            duration: "35 دقيقة",
          },
          {
            name: "مراجعة نهائية للمادة",
            type: "Youtube",
            duration: "1.5 ساعة",
          },
        ],
      };

      // Show/hide pages
      function showPage(pageId) {
        // Hide all pages
        document.querySelectorAll(".page").forEach((page) => {
          page.classList.remove("active");
        });

        // Show selected page
        document.getElementById(pageId).classList.add("active");

        // Update active nav link
        document.querySelectorAll(".nav-link").forEach((link) => {
          link.classList.remove("active");
        });

        // Find the link that corresponds to this page
        const activeLink = Array.from(
          document.querySelectorAll(".nav-link")
        ).find((link) => {
          return link.getAttribute("onclick") === `showPage('${pageId}')`;
        });

        if (activeLink && pageId !== "material") {
          activeLink.classList.add("active");
        }

        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
        }

        // Scroll to top
        window.scrollTo(0, 0);
      }

      // Open material page
      function openMaterialPage(materialName, materialIcon, materialDesc) {
        // Set material info
        document.getElementById("materialTitle").textContent = materialName;
        document.getElementById("materialDescText").textContent = materialDesc;

        // Set material icon
        const iconElement = document.getElementById("materialIcon");
        iconElement.innerHTML = `<i class="${materialIcon}"></i>`;

        // Get resources for this material or use defaults
        const resources = materialResources[materialName] || defaultResources;

        // Populate exams list
        const examsList = document.getElementById("examsList");
        examsList.innerHTML = "";
        resources.exams.forEach((exam) => {
          examsList.innerHTML += `
                    <li class="resource-item">
                        <a href="#" onclick="downloadResource('${exam.name}')">${exam.name}</a>
                        <span class="resource-meta">${exam.type} • ${exam.size}</span>
                    </li>
                `;
        });

        // Populate materials list
        const materialsList = document.getElementById("materialsList");
        materialsList.innerHTML = "";
        resources.materials.forEach((material) => {
          materialsList.innerHTML += `
                    <li class="resource-item">
                        <a href="#" onclick="downloadResource('${material.name}')">${material.name}</a>
                        <span class="resource-meta">${material.type} • ${material.size}</span>
                    </li>
                `;
        });

        // Populate summaries list
        const summariesList = document.getElementById("summariesList");
        summariesList.innerHTML = "";
        resources.summaries.forEach((summary) => {
          summariesList.innerHTML += `
                    <li class="resource-item">
                        <a href="#" onclick="downloadResource('${summary.name}')">${summary.name}</a>
                        <span class="resource-meta">${summary.type} • ${summary.size}</span>
                    </li>
                `;
        });

        // Populate videos list
        const videosList = document.getElementById("videosList");
        videosList.innerHTML = "";
        resources.videos.forEach((video) => {
          videosList.innerHTML += `
                    <li class="resource-item">
                        <a href="#" onclick="watchVideo('${video.name}')">${video.name}</a>
                        <span class="resource-meta">${video.type} • ${video.duration}</span>
                    </li>
                `;
        });

        // Show material page
        showPage("material");
      }

      // Simulate download
      function downloadResource(resourceName) {
        alert(
          `سيبدأ تحميل: ${resourceName}\n(هذه ميزة تجريبية، في التطبيق الكامل سيبدأ التحميل الفعلي)`
        );
      }

      // Simulate video watch
      function watchVideo(videoName) {
        alert(
          `سيتم فتح فيديو: ${videoName}\n(هذه ميزة تجريبية، في التطبيق الكامل سيتم تشغيل الفيديو)`
        );
      }

      // Auth form switching
      function showAuthForm(formId) {
        // Hide all forms
        document.querySelectorAll(".auth-form").forEach((form) => {
          form.classList.remove("active");
        });

        // Show selected form
        document.getElementById(`${formId}-form`).classList.add("active");

        // Update active tab
        document.querySelectorAll(".auth-tab").forEach((tab) => {
          tab.classList.remove("active");
        });

        // Activate corresponding tab
        const activeTab = Array.from(
          document.querySelectorAll(".auth-tab")
        ).find((tab) => {
          return tab.getAttribute("onclick") === `showAuthForm('${formId}')`;
        });

        if (activeTab) {
          activeTab.classList.add("active");
        }
      }

      // Continue as guest function
      function continueAsGuest() {
        alert("مرحباً بك كزائر! يمكنك تصفح المحتوى المتاح للعموم.");
        showPage("home");
      }

      // Search functionality
      function performSearch() {
        const searchInput = document.getElementById("search-input");
        const query = searchInput.value.trim();

        if (query) {
          alert(
            `سيتم البحث عن: "${query}" - هذه ميزة تجريبية، في التطبيق الكامل سيتم عرض نتائج البحث.`
          );
        } else {
          alert("يرجى إدخال كلمات للبحث عنها.");
        }
      }

      // Filter functionality
      function setFilter(filter) {
        document.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });

        event.target.classList.add("active");
        alert(`تم تطبيق عامل التصفية: ${filter}`);
      }

      // Form submission handlers
      document.addEventListener("DOMContentLoaded", function () {
        // Login form
        document
          .getElementById("login-form")
          .addEventListener("submit", function (e) {
            e.preventDefault();
            alert("تم تسجيل الدخول بنجاح! سيتم توجيهك إلى الصفحة الرئيسية.");
            showPage("home");
          });

        // Signup form
        document
          .getElementById("signup-form")
          .addEventListener("submit", function (e) {
            e.preventDefault();
            alert(
              "تم إنشاء حسابك بنجاح! يرجى التحقق من بريدك الإلكتروني لتأكيد الحساب."
            );
            showAuthForm("login");
          });

        // Forgot password form
        document
          .getElementById("forgot-form")
          .addEventListener("submit", function (e) {
            e.preventDefault();
            alert(
              "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني."
            );
            showAuthForm("login");
          });

        // Donation form
        document
          .getElementById("donation-form")
          .addEventListener("submit", function (e) {
            e.preventDefault();
            alert(
              "شكراً لك على تبرعك! سيتواصل معك أحد المتطوعين لترتيب استلام المواد."
            );
            // Reset form
            e.target.reset();
          });
      });
