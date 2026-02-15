import { useEffect, useState } from "react";

const useTheme = () => {
  const saved = localStorage.getItem("theme");
  const initial = (saved as "light" | "dark") || "dark";
  const [theme, setTheme] = useState<"light" | "dark">(initial);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
