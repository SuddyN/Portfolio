import { Route, Routes, useNavigate } from "react-router-dom";
import { TabMenu } from "primereact/tabmenu";
import { Card } from "primereact/card";
import { Home } from "../pages/Home";
import "./AppWrapper.css";
import { AboutMe } from "../pages/AboutMe";

/// AppWrapper needs to be a functional component, to get access to useNavigate hook
export function AppWrapper() {
  const navigate = useNavigate();

  const menuItems = () => {
    const items = [
      // New page components need an entry in the top bar
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
        command: () => navigate("/"),
      },
      {
        label: "About Me",
        icon: "pi pi-fw pi-question",
        command: () => navigate("/about"),
      },
    ];

    return items;
  };

  return (
    <div>
      <TabMenu model={menuItems()} />
      <Card>
        <Routes>
          {/* New page components need a Route listing */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </Card>
    </div>
  );
}
