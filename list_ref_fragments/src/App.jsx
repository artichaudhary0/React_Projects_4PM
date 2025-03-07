import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import FruitList from "./components/FruitList";

// object for light and dark theme
const styles = {
  light: {
    bg: "#ffffff",
    text: "#333333",
    card: "#f5f5f5",
    border: "#ddd",
  },
  dark: {
    bg: "#222222",
    text: "#f5f5f5",
    card: "#333333",
    border: "#444",
  },
};

function App() {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("home");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // dependency => theme
  useEffect(() => {
    document.body.style.backgroundColor = styles[theme].bg;
    document.body.style.color = styles[theme].text;
  }, [theme]);

  const containerStyle = {
    minWidth: "1000px",
  };

  const mainStyle = {
    backgroundColor: styles[theme].card,
  };

  const footerStyle = {
    textAlign: "center",
    marginTop: "40px",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} />

      <main style={mainStyle}>
        {activeTab === "home" && (
          <div style={{ textAlign: "center" }}>
            <h1>React Concept</h1>
            <p>List and keys</p>
            <p>Refs</p>
            <p>Fragments</p>
            <p>State and Props</p>
            <p>Hooks</p>
          </div>
        )}

        {activeTab === "todos" && <TodoList theme={theme} />}
        {activeTab === "profile" && <UserProfile theme={theme} />}
        {activeTab === "counter" && <Counter theme={theme} />}
        {activeTab === "fruits" && <FruitList theme={theme} />}
      </main>

      <ThemeToggle theme={"dark"} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
