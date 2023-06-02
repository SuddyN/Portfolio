import { Route, Routes, useNavigate } from 'react-router-dom';
import { MegaMenu } from 'primereact/megamenu';
import { Card } from 'primereact/card';
import { Home } from '../pages/Home';
import './AppWrapper.css';
import { AboutMe } from '../pages/AboutMe';
import { HDR } from '../pages/HDR/HDR';
import { Connections } from '../Components/Connections';

/// AppWrapper needs to be a functional component, to get access to useNavigate hook
export function AppWrapper() {
  const navigate = useNavigate();

  const menuItems = () => {
    const items = [
      // New page components need an entry in the top bar
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        command: () => navigate('/Portfolio/'),
      },
      {
        label: 'About Me',
        icon: 'pi pi-fw pi-question',
        command: () => navigate('/Portfolio/about'),
      },
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Open Source Development',
              items: [
                {
                  label: 'HewDraw Remix',
                  command: () => navigate('/Portfolio/Projects/OpenSource/HDR'),
                },
                {
                  label: 'Stage Comparison',
                  command: () =>
                    navigate('/Portfolio/Projects/OpenSource/StageComparison'),
                },
              ],
            },
            {
              label: 'Game Development',
              items: [
                {
                  label: 'Coulomball',
                  command: () =>
                    navigate('/Portfolio/Projects/GameDevelopment/Coulomball'),
                },
                {
                  label: 'Hat Trick',
                  command: () =>
                    navigate('/Portfolio/Projects/GameDevelopment/HatTrick'),
                },
                {
                  label: 'Asteroids 3D',
                  command: () =>
                    navigate('/Portfolio/Projects/GameDevelopment/Asteroids3D'),
                },
              ],
            },
          ],
        ],
      },
      {
        label: 'Connections',
        icon: 'pi pi-fw pi-users',
        command: () => navigate('/Portfolio/Connections'),
      },
    ];

    return items;
  };

  return (
    <div>
      <MegaMenu model={menuItems()} />
      <Card>
        <Routes>
          {/* New page components need a Route listing */}
          <Route path="/Portfolio/" element={<Home />} />
          <Route path="/Portfolio/about" element={<AboutMe />} />
          <Route path="/Portfolio/Projects/OpenSource/HDR" element={<HDR />} />
          <Route
            path="/Portfolio/Projects/OpenSource/StageComparison"
            element={<AboutMe />}
          />
          <Route
            path="/Portfolio/Projects/GameDevelopment/Coulomball"
            element={<AboutMe />}
          />
          <Route
            path="/Portfolio/Projects/GameDevelopment/HatTrick"
            element={<AboutMe />}
          />
          <Route
            path="/Portfolio/Projects/GameDevelopment/Asteroids3D"
            element={<AboutMe />}
          />
          <Route path="/Portfolio/Connections" element={<Connections />} />
        </Routes>
      </Card>
    </div>
  );
}
