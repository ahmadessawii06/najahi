import { useEffect, useState } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const savedTheme = localStorage.getItem("theme");

    // تطبيق الثيم المحدد
    const applyTheme = (isDark: boolean) => {
      document.body.classList.toggle("dark-theme", isDark);
      setDark(isDark);
    };

    // تحديد الثيم الأولي
    const isDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark.matches);
    applyTheme(isDarkMode);

    // الاستماع لتغييرات النظام
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches);
      }
    };

    prefersDark.addEventListener("change", listener);
    return () => prefersDark.removeEventListener("change", listener);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !dark;
    document.body.classList.toggle("dark-theme");
    setDark(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <>
      {children}
      <button
        id="themeToggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
        className="theme-toggle-btn"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
          padding: '10px 15px',
          borderRadius: '20px',
          border: 'none',
          cursor: 'pointer',
          background: 'var(--button-bg, #f0f0f0)',
          color: 'var(--button-color, #333)'
        }}
      >
        {dark ? "☀️ " : "🌙"}
      </button>
    </>
  );
}