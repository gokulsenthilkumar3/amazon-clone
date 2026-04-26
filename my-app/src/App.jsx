import "./App.css";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/theme";
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </ThemeContext.Provider>
  );
}

export default App;
