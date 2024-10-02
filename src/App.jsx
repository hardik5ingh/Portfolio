import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./main.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/js/bootstrap";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/MyThemeContext";

export default function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const darkTheme = () => {
    setThemeMode("light");
  };

  const lightTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("body").classList.remove("dark", "light");
    document.querySelector("body").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    </ThemeProvider>
  );
}
