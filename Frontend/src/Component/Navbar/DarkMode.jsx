import React, { useEffect, useState } from "react";
import LightModeImage from "../../assets/light-mode-button.png";
import DarkModeImage from "../../assets/dark-mode-button.png";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.remove("dark");
      element.classList.add("light");
    }
  }, [theme]); // Added theme as a dependency

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightModeImage}
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={DarkModeImage}
        alt="Dark Mode"
        className={`w-12 cursor-pointer ${
          theme === "light" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
    </div>
  );
};

export default ThemeToggle;
